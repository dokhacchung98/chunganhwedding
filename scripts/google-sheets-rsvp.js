/* eslint-disable */
/**
 * GOOGLE APPS SCRIPT CHO THIỆP CƯỚI (LƯU LỜI CHÚC & RSVP)
 *
 * Hướng dẫn cài đặt trong 1 phút:
 * 1. Mở Google Sheet bạn muốn lưu danh sách (hoặc tạo sheet mới).
 * 2. Trên menu: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa code mặc định và dán toàn bộ nội dung file này vào.
 * 4. Nhấn nút "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment).
 * 5. Chọn loại: "Ứng dụng web" (Web app).
 * 6. Cấu hình:
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Người có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone).
 * 7. Bấm "Triển khai" (Deploy) và cấp quyền truy cập.
 * 8. Copy đường dẫn "URL ứng dụng web" (Web App URL) vừa tạo.
 * 9. Thêm vào biến môi trường trên Vercel:
 *    RSVP_WEBHOOK_URL = <đường_dẫn_URL_vừa_copy>
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Tự động tạo hàng tiêu đề nếu sheet còn trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian gửi",
        "Họ và tên khách mời",
        "Tham dự",
        "Sự kiện tham dự",
        "Số người đi cùng",
        "Lời chúc gửi cô dâu & chú rể",
        "ID bản ghi"
      ]);
      // Định dạng in đậm hàng tiêu đề
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#f3f3f3");
    }

    var data = JSON.parse(e.postData.contents);

    var time = data.timeFormatted || new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    var name = data.name || "";
    var attendance = data.attendanceLabel || (data.attendance === "yes" ? "Tham dự" : "Bận, không tham dự");
    var event = data.eventLabel || data.event || "—";
    var companions = data.companions || 0;
    var message = data.message || "";
    var id = data.id || "";

    sheet.appendRow([time, name, attendance, event, companions, message, id]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();

    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var results = [];
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      results.push({
        createdAt: row[0],
        name: row[1],
        attendance: row[2] === "Tham dự" ? "yes" : "no",
        event: row[3],
        companions: Number(row[4]) || 0,
        message: row[5],
        id: row[6] || ""
      });
    }

    return ContentService.createTextOutput(JSON.stringify(results))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
