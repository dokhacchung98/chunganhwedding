"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "saving" | "success" | "error";

export function RsvpForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [attendance, setAttendance] = useState("yes");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("saving");
    setErrorMessage("");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Không thể lưu phản hồi.");
      }

      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Không thể lưu phản hồi.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rsvp-success" role="status">
        <span aria-hidden="true">✓</span>
        <h3>Cảm ơn bạn đã phản hồi!</h3>
        <p>Thông tin đã được lưu vào danh sách xác nhận của hai gia đình.</p>
        <button type="button" className="text-button" onClick={() => setStatus("idle")}>
          Gửi phản hồi khác
        </button>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <div className="field field--full">
        <label htmlFor="guest-name">Tên của bạn</label>
        <input id="guest-name" name="name" required autoComplete="name" placeholder="Nhập họ và tên" />
      </div>

      <fieldset className="field field--full">
        <legend>Bạn sẽ đến chung vui chứ?</legend>
        <div className="choice-group">
          <label className="choice">
            <input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} />
            <span>Chắc chắn rồi</span>
          </label>
          <label className="choice">
            <input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} />
            <span>Rất tiếc, mình bận</span>
          </label>
        </div>
      </fieldset>

      {attendance === "yes" ? (
        <>
          <div className="field">
            <label htmlFor="event">Sự kiện tham dự</label>
            <select id="event" name="event" defaultValue="thanh-hon">
              <option value="vu-quy">Lễ Vu Quy</option>
              <option value="thanh-hon">Lễ Thành Hôn</option>
              <option value="both">Cả hai sự kiện</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="companions">Số người tham dự</label>
            <select id="companions" name="companions" defaultValue="1">
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
              <option value="4">4 người</option>
            </select>
          </div>
        </>
      ) : null}

      <div className="field field--full">
        <label htmlFor="message">Lời nhắn gửi đến chúng mình</label>
        <textarea id="message" name="message" rows={4} maxLength={400} placeholder="Viết một lời chúc thật đẹp…" />
      </div>

      <button className="button button--primary rsvp-form__submit" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Đang lưu…" : "Gửi lời xác nhận"}
      </button>
      {status === "error" ? <p className="form-error" role="alert">{errorMessage}</p> : null}
      <p className="form-note">Phản hồi sẽ được gửi trực tiếp đến danh sách tổng hợp của hai gia đình.</p>
    </form>
  );
}
