import { CompanyProfile } from './companies';

export const companyTranslations: Record<string, Record<string, {
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}>> = {
  vi: {
    logitech: {
      tagline: 'Kỹ thuật Thụy Sĩ, tầm với toàn cầu',
      description:
        'Logitech là một trong những thương hiệu nổi tiếng nhất trong lĩnh vực thiết bị ngoại vi máy tính và hội nghị truyền hình. Dòng Rally của họ thống lĩnh phân khúc tầm trung với các giải pháp đáng tin cậy, tích hợp tốt. Họ có hàng thập kỷ chuyên môn về âm thanh và quan hệ đối tác mạnh mẽ với Zoom và Microsoft.',
      strengths: [
        'Nhận diện thương hiệu mạnh và được tin cậy',
        'RightSight AI khung hình và RightSound khử tiếng ồn xuất sắc',
        'Nền tảng quản lý đám mây Logitech Sync',
        'Hỗ trợ đa nền tảng (Zoom, Teams, Google Meet, BYOD)',
        'Hệ sinh thái mô-đun (mic pods, loa, bộ điều khiển)',
        'Chất lượng gia công tốt và lịch sử độ tin cậy cao',
      ],
      weaknesses: [
        'Giá cao cấp — không phải lựa chọn rẻ nhất',
        'Một số sản phẩm mang cảm giác "an toàn" hơn là đổi mới',
        'Tính năng AI tụt hậu so với các đối thủ mới như Neat',
        'Thông số phần cứng camera (số MP) thấp hơn đối thủ',
        'Ít tích cực hơn trong phân khúc màn hình tích hợp',
      ],
    },
    poly: {
      tagline: 'Thiết kế cho sự rõ ràng',
      description:
        'Nay là một phần của HP, Poly mang theo hàng thập kỷ di sản kỹ thuật âm thanh từ Plantronics và Polycom. Dòng Studio X của họ kết hợp chuyên môn âm học đã được chứng minh với các tính năng camera AI hiện đại. Họ có sự hiện diện mạnh mẽ trong lĩnh vực điện thoại doanh nghiệp.',
      strengths: [
        'Chất lượng âm thanh và khử tiếng ồn hàng đầu phân khúc',
        'Poly DirectorAI với theo dõi người nói thông minh và khung hình nhóm',
        'Hỗ trợ doanh nghiệp và cơ sở hạ tầng dịch vụ mạnh mẽ',
        'Sự hậu thuẫn của HP mang lại ổn định chuỗi cung ứng',
        'Khả năng zoom camera tốt (5x trên X52/X70)',
        'Quản lý đám mây Poly Lens',
      ],
      weaknesses: [
        'Tích hợp với hệ sinh thái HP vẫn đang hoàn thiện',
        'Sự chồng chéo sản phẩm Polycom cũ gây nhầm lẫn',
        'Nền tảng phần mềm (Poly Lens) kém hoàn thiện hơn Logitech Sync',
        'Thiết kế có thể mang cảm giác doanh nghiệp/nhàm chán',
        'Chậm áp dụng công nghệ cảm biến tiên tiến',
      ],
    },
    cisco: {
      tagline: 'Mạng lưới là nền tảng',
      description:
        "Dòng Webex Room của Cisco mang lại bảo mật cấp doanh nghiệp và tích hợp cho hội nghị truyền hình. Thiết bị của họ được thiết kế cho các tổ chức đã đầu tư vào hệ sinh thái Cisco/Webex, với các chứng chỉ bảo mật hàng đầu.",
      strengths: [
        'Bảo mật và tuân thủ cấp doanh nghiệp',
        'Hệ thống camera kép 96MP (Room Bar Pro) — độ phân giải cao nhất thị trường',
        'Tích hợp sâu Webex và quản lý Control Hub',
        'Khử tiếng ồn AI và nhận diện khuôn mặt',
        'RoomOS mang lại trải nghiệm nhất quán trên mọi thiết bị',
        'Trí tuệ phòng học mạnh (đếm người, chất lượng không khí)',
      ],
      weaknesses: [
        'Giá cao cấp — thường gấp 2 lần đối thủ',
        'Trải nghiệm tốt nhất đòi hỏi cam kết hoàn toàn với Webex',
        'Hỗ trợ nền tảng bên thứ ba yếu hơn',
        'Thiết lập phức tạp cho môi trường không phải Cisco',
        'Triển khai tính năng chậm hơn các đối thủ linh hoạt',
        'Phần cứng có thể mang cảm giác cồng kềnh và lỗi thời',
      ],
    },
    neat: {
      tagline: 'Đẹp một cách đơn giản',
      description:
        'Neat là kẻ phá vỡ — startup Na Uy từ con số không trở thành ngôi sao Zoom/Teams chỉ trong vài năm. Họ ưu tiên cảm biến tiên tiến, thiết kế Scandinavian mượt mà, và tính năng AI-first. Thiết bị của họ mang cảm giác như công nghệ tiêu dùng, không phải đồ dùng doanh nghiệp.',
      strengths: [
        'Thiết kế và thẩm mỹ hàng đầu phân khúc',
        'Cảm biến tiên tiến: radar (đánh thức), độ sâu (ToF), ánh sáng môi trường',
        'Hệ thống camera kép 100MP (Bar Pro / Board Pro)',
        'Neat Symmetry — cân bằng kích thước người tham gia từ xa và tại phòng',
        'Neat Boundary — vách ngăn phòng ảo qua cảm biến độ sâu',
        'Chu kỳ phát triển tính năng nhanh nhất ngành',
        'Google Meet được chứng nhận (Tháng 1/2026) — hỗ trợ Zoom, Teams và Meet',
        'Chế độ BYOD có sẵn trên Bar Gen 2, Bar Pro, Board 50, Board Pro — kết nối laptop qua USB-C hoặc sử dụng chế độ BYOD-only độc lập',
        'Dựa trên Android, cập nhật phần mềm thường xuyên',
      ],
      weaknesses: [
        'Công ty mới — chu kỳ đổi mới nhanh với tính năng thường xuyên được cập nhật',
        'Google Meet mới được thêm gần đây (Tháng 1/2026) — đang mở rộng ngoài Zoom/Teams',
        'Mạng lưới hỗ trợ toàn cầu đang phát triển — mở rộng theo nhu cầu',
        'Định vị cao cấp — đầu tư vào công nghệ cảm biến tiên tiến và thiết kế Scandinavian',
        'Các thế hệ phần cứng đầu được tinh chỉnh qua cập nhật phần mềm liên tục'
      ],
    },
    yealink: {
      tagline: 'Cộng tác dễ dàng, năng suất cao',
      description:
        'Yealink là vua giá trị — nhà sản xuất Trung Quốc cung cấp thiết bị giàu tính năng với giá cạnh tranh. Họ thống lĩnh tại châu Á và đang nhanh chóng giành thị phần tại châu Âu/châu Mỹ với các thanh âm thanh và màn hình được chứng nhận Teams và Zoom.',
      strengths: [
        'Tỷ lệ giá-trên-tính năng tốt nhất thị trường',
        'Camera siêu rộng (151° trên A25) cho phòng nhỏ',
        'Chipset Qualcomm 8550 trên A50 cho xử lý AI',
        'Chương trình chứng nhận Teams và Zoom mạnh mẽ',
        'Phát triển và lặp lại sản phẩm nhanh chóng',
        'Lựa chọn màn hình tốt (MeetingBoard) với chi phí thấp hơn',
      ],
      weaknesses: [
        'Bị nhận thức là thương hiệu "giá rẻ" so với Logitech/Cisco',
        'Trải nghiệm phần mềm kém hoàn thiện hơn Neat/Logitech',
        'Tính năng AI kém tinh vi hơn đối thủ cao cấp',
        'Chất lượng âm thanh tốt nhưng không hàng đầu phân khúc',
        'Mạng lưới hỗ trợ mỏng hơn tại châu Mỹ',
        'Một số lo ngại về hỗ trợ firmware dài hạn',
      ],
    },
    crestron: {
      tagline: 'Kiểm soát mọi thứ',
      description:
        'Crestron là gã khổng lồ tự động hóa và điều khiển đồng thời sản xuất phần cứng hội nghị truyền hình. Videobar 70 của họ được xây dựng cho phòng lớn và tích hợp sâu với hệ thống điều khiển phòng của họ. Họ là lựa chọn cho các cài đặt AV doanh nghiệp hạng sang.',
      strengths: [
        'Tích hợp sâu tự động hóa và điều khiển phòng',
        'Dãy 24 micro trên Videobar 70 — nhiều mic nhất trong mọi thanh âm thanh',
        'Hệ thống 4 camera cho ghép hình video thông minh',
        'Bảo mật và quản lý cấp doanh nghiệp',
        'Tốt nhất cho không gian lớn/huddle và cài đặt AV tùy chỉnh',
        'Nền tảng thống nhất cho ánh sáng, rèm, AV và hội nghị truyền hình',
      ],
      weaknesses: [
        'Quá mức cho triển khai đơn giản — thiết lập phức tạp',
        'Đòi hỏi chuyên môn Crestron để phát huy đầy đủ giá trị',
        'Hệ sinh thái đắt nhất khi tính cả hệ thống điều khiển',
        'Không cạnh tranh cho triển khai plug-and-play đơn giản',
        'Bộ tính năng chuyên biệt hội nghị truyền hình nhỏ hơn so với nhà cung cấp chuyên dụng',
        'UX phần mềm kém tinh chỉnh hơn so với Zoom/Teams gốc',
      ],
    },
    lenovo: {
      tagline: 'Công nghệ thông minh hơn cho tất cả',
      description:
        "Dòng ThinkSmart của Lenovo tận dụng chuyên môn sản xuất PC của họ. Bar 180 độc đáo với camera panorama 180° — hoàn hảo cho phòng rộng. Họ hoạt động tốt trong kịch bản làm việc lai với tích hợp PC/ThinkPad mạnh mẽ.",
      strengths: [
        'Camera panorama 180° độc đáo với cảm biến 13MP',
        'Zoom số không mất dữ liệu 6x và khung hình thông minh',
        'Tích hợp mạnh mẽ với hệ sinh thái ThinkPad/Windows',
        'Nhẹ (2.2kg) và thiết kế nhỏ gọn',
        'Hỗ trợ BYOD tốt',
        'Giá cả cạnh tranh cho bộ tính năng',
      ],
      weaknesses: [
        'Người chơi mới — lịch sử hoạt động trong hội nghị truyền hình chưa được chứng minh',
        'Nền tảng phần mềm kém hoàn thiện hơn Logitech Sync',
        'Dải sản phẩm hạn chế so với đối thủ đầy đủ bộ',
        'Định dạng panorama (3840x1080) có thể bất tiện trên một số nền tảng',
        'Cơ sở hạ tầng hỗ trợ vẫn đang xây dựng',
        'Độ phân giải camera thấp hơn đối thủ 4K',
      ],
    },
    dten: {
      tagline: 'Sự đơn giản tất-cả-trong-một',
      description:
        'DTEN tập trung độc quyền vào màn hình tích hợp với Zoom/Teams tích hợp sẵn. Dòng D7X của họ bao phủ mọi thứ từ thiết bị cá nhân 27" đến màn hình phòng khổng lồ 75". Họ ưu tiên cộng tác cảm ứng đầu tiên với tính năng bảng trắng.',
      strengths: [
        'Thiết kế chuyên dụng cho Zoom Rooms và Teams Rooms',
        'Dãy 15 micro trên màn hình lớn hơn — thu âm xuất sắc',
        'Trải nghiệm cảm ứng và bảng trắng mạnh mẽ',
        'BYOD Smart Connect qua một cáp USB-C',
        'Mọi kích thước từ cá nhân đến phòng lớn trong một dòng sản phẩm',
        'Thiết kế sạch sẽ, tối giản',
      ],
      weaknesses: [
        'Giới hạn Zoom/Teams — không có Google Meet hay Webex',
        'Tất-cả-trong-một nghĩa là không nâng cấp mô-đun (gắn với chất lượng màn hình)',
        'Trí tuệ camera kém hơn Neat/Cisco',
        'Nhận diện thương hiệu nhỏ hơn bên ngoài hệ sinh thái Zoom',
        'Mạng lưới dịch vụ và hỗ trợ hạn chế so với Logitech',
        'Giá cao cấp cho màn hình lớn hơn',
      ],
    },
    maxhub: {
      tagline: 'Tối đa hóa cộng tác',
      description:
        'MAXHUB là công ty công nghệ màn hình Trung Quốc đã mở rộng mạnh mẽ vào màn hình tương tác và thanh âm thanh hội nghị truyền hình. Họ cạnh tranh gay gắt về thông số — camera 100MP, dãy 16 mic, FOV 180° — với giá cắt giảm so với đối thủ phương Tây.',
      strengths: [
        'Thông số ấn tượng: camera kép 100MP, dãy 16 mic, FOV 180°',
        'Phạm vi thu giọng 15 mét — dài nhất phân khúc',
        'Giá cả cạnh tranh nhất cho bộ tính năng',
        'Dải kích thước màn hình rộng (55" đến 86")',
        'Công nghệ Khử Tiếng ồn AI',
        'FlexMount cho lắp đặt dễ dàng',
        'Được chứng nhận Teams và Zoom',
      ],
      weaknesses: [
        'Nhận diện thương hiệu thấp bên ngoài châu Á',
        'Trải nghiệm phần mềm kém tinh chỉnh hơn đối thủ phương Tây',
        'Hỗ trợ dài hạn và cập nhật firmware chưa chắc chắn',
        'Nhận thức chất lượng gia công so với Logitech/Cisco',
        'Mạng lưới dịch vụ toàn cầu hạn chế',
        'Marketing thông số kỹ thuật có thể không phản ánh hiệu suất thực tế',
      ],
    },
  },
  th: {
    logitech: {
      tagline: 'วิศวกรรมสวิส มาตรฐานโลก',
      description:
        'Logitech เป็นหนึ่งในแบรนด์ที่เป็นที่รู้จักมากที่สุดในด้านอุปกรณ์ต่อพ่วงคอมพิวเตอร์และการประชุมทางวิดีโอ ซีรีส์ Rally ของพวกเขาครองตลาดกลางด้วยโซลูชันที่เชื่อถือได้และผสานรวมได้ดี พวกเขามีความเชี่ยวชาญด้านเสียงมาหลายทศวรรษและเป็นพันธมิตรที่แข็งแกร่งกับ Zoom และ Microsoft',
      strengths: [
        'แบรนด์ที่ได้รับการยอมรับและเชื่อถือในระดับสูง',
        'RightSight AI framing และ RightSound noise suppression ยอดเยี่ยม',
        'แพลตฟอร์มจัดการบนคลาวด์ Logitech Sync',
        'รองรับหลายแพลตฟอร์ม (Zoom, Teams, Google Meet, BYOD)',
        'ระบบนิเวศแบบโมดูลาร์ (mic pods, ลำโพง, ตัวควบคุม)',
        'คุณภาพการประกอบดีและประวัติความน่าเชื่อถือสูง',
      ],
      weaknesses: [
        'ราคาระดับพรีเมียม — ไม่ใช่ตัวเลือกที่ถูกที่สุด',
        'ผลิตภัณฑ์บางรุ่นรู้สึก "ปลอดภัย" มากกว่าสร้างสรรค์',
        'ฟีเจอร์ AI ตามหลังคู่แข่งใหม่อย่าง Neat',
        'สเปกฮาร์ดแวร์กล้อง (จำนวน MP) ต่ำกว่าคู่แข่ง',
        'ไม่ค่อยก้าวร้าวในตลาดจอแสดงผล All-in-One',
      ],
    },
    poly: {
      tagline: 'ออกแบบมาเพื่อความชัดเจน',
      description:
        'ตอนนี้เป็นส่วนหนึ่งของ HP, Poly นำมรดกด้านวิศวกรรมเสียงหลายทศวรรษจาก Plantronics และ Polycom ซีรีส์ Studio X ของพวกเขาผสมผสานความเชี่ยวชาญด้านเสียงที่พิสูจน์แล้วกับฟีเจอร์กล้อง AI สมัยใหม่ พวกเขามีความแข็งแกร่งในด้านโทรศัพท์องค์กร',
      strengths: [
        'คุณภาพเสียงและการตัดเสียงรบกวนระดับสูงสุดในตลาด',
        'Poly DirectorAI พร้อมติดตามผู้พูดอัจฉริยะและกรอบภาพกลุ่ม',
        'โครงสร้างพื้นฐานการสนับสนุนและบริการองค์กรที่แข็งแกร่ง',
        'การสนับสนุนจาก HP มอบความมั่นคงด้านห่วงโซ่อุปทาน',
        'ความสามารถซูมกล้องที่ดี (5x บน X52/X70)',
        'การจัดการบนคลาวด์ Poly Lens',
      ],
      weaknesses: [
        'การผสานรวมกับระบบนิเวศ HP ยังคงพัฒนาอยู่',
        'ผลิตภัณฑ์ Polycom รุ่นเก่าบางรุ่นซ้อนทับกันทำให้สับสน',
        'แพลตฟอร์มซอฟต์แวร์ (Poly Lens) ยังไม่สมบูรณ์เท่า Logitech Sync',
        'การออกแบบอาจรู้สึกเป็นองค์กร/น่าเบื่อ',
        'ช้าในการนำเทคโนโลยีเซ็นเซอร์ล้ำสมัย',
      ],
    },
    cisco: {
      tagline: 'เครือข่ายคือแพลตฟอร์ม',
      description:
        'ซีรีส์ Webex Room ของ Cisco นำความปลอดภัยและการผสานรวมระดับองค์กรมาสู่การประชุมทางวิดีโอ อุปกรณ์ของพวกเขาออกแบบมาสำหรับองค์กรที่ลงทุนในระบบนิเวศ Cisco/Webex แล้ว พร้อมใบรับรองความปลอดภัยระดับสูงสุด',
      strengths: [
        'ความปลอดภัยและการปฏิบัติตามระดับองค์กร',
        'ระบบกล้องคู่ 96MP (Room Bar Pro) — ความละเอียดสูงสุดในตลาด',
        'การผสานรวม Webex อย่างลึกซึ้งและการจัดการ Control Hub',
        'AI ตัดเสียงรบกวนและการจดจำใบหน้า',
        'RoomOS มอบประสบการณ์ที่สม่ำเสมอบนอุปกรณ์ทั้งหมด',
        'ความฉลาภายในห้องประชุมสูง (นับจำนวนคน, คุณภาพอากาศ)',
      ],
      weaknesses: [
        'ราคาระดับพรีเมียม — มักสูงกว่าคู่แข่ง 2 เท่า',
        'ประสบการณ์ที่ดีที่สุดต้องการการผูกขาดกับ Webex',
        'การรองรับแพลตฟอร์มบุคคลที่สามอ่อนกว่า',
        'การตั้งค่าที่ซับซ้อนสำหรับสภาพแวดล้อมที่ไม่ใช่ Cisco',
        'การออกฟีเจอร์ช้ากว่าคู่แข่งที่คล่องตัว',
        'ฮาร์ดแวร์อาจรู้สึกหนักและล้าสมัย',
      ],
    },
    neat: {
      tagline: 'สวยงามอย่างเรียบง่าย',
      description:
        'Neat เป็นผู้พลิกโฉม — สตาร์ทอัพนอร์เวย์ที่กลายมาเป็นดาวเด่นของ Zoom/Teams ในเวลาเพียงไม่กี่ปี พวกเขาให้ความสำคัญกับเซ็นเซอร์ล้ำสมัย การออกแบบสแกนดิเนเวียนที่เนี๊ยบหมดจด และฟีเจอร์ AI-first อุปกรณ์ของพวกเขาให้ความรู้สึกเหมือนเทคโนโลยีสำหรับผู้บริโภค ไม่ใช่อุปกรณ์องค์กร',
      strengths: [
        'การออกแบบและสุนทรียศาสตร์ระดับสูงสุดในตลาด',
        'เซ็นเซอร์ล้ำสมัย: เรดาร์ (ปลุก), ความลึก (ToF), แสงแวดล้อม',
        'ระบบกล้องคู่ 100MP (Bar Pro / Board Pro)',
        'Neat Symmetry — ปรับขนาดผู้เข้าร่วมระยะไกลและในห้องให้เท่าเทียมกัน',
        'Neat Boundary — ผนังห้องเสมือนผ่านเซ็นเซอร์ความลึก',
        'วงจรการพัฒนาฟีเจอร์ที่เร็วที่สุดในอุตสาหกรรม',
        'ได้รับการรับรอง Google Meet (ม.ค. 2026) — รองรับ Zoom, Teams และ Meet',
        'โหมด BYOD ใช้ได้บน Bar Gen 2, Bar Pro, Board 50, Board Pro — เชื่อมต่อแล็ปท็อปผ่าน USB-C หรือใช้โหมด BYOD-only แบบสแตนด์อโลน',
        'บนพื้นฐาน Android, อัปเดตซอฟต์แวร์บ่อยครั้ง',
      ],
      weaknesses: [
        'บริษัทใหม่ — วงจรนวัตกรรมรวดเร็วพร้อมการออกฟีเจอร์บ่อยครั้ง',
        'Google Meet เพิ่มเข้ามาเร็วๆ นี้ (ม.ค. 2026) — กำลังขยายจาก Zoom/Teams',
        'เครือข่ายการสนับสนุนทั่วโลกกำลังเติบโต — ขยายตัวตามความต้องการ',
        'ตำแหน่งระดับพรีเมียม — ลงทุนในเทคโนโลยีเซ็นเซอร์ขั้นสูงและการออกแบบสแกนดิเนเวียน',
        'รุ่นฮาร์ดแวร์แรกๆ ได้รับการปรับแต่งผ่านการอัปเดตซอฟต์แวร์อย่างต่อเนื่อง',
      ],
    },
    yealink: {
      tagline: 'ความร่วมมือง่ายดาย ประสิทธิผลสูง',
      description:
        'Yealink เป็นแชมป์ด้านคุณค่า — ผู้ผลิตจีนที่นำเสนออุปกรณ์ที่มีฟีเจอร์ครบครันด้วยราคาที่ดุดัน พวกเขาครองตลาดในเอเชียและกำลังเติบโตอย่างรวดเร็วในยุโรป/อเมริกากับบาร์และจอแสดงผลที่ได้รับการรับรอง Teams และ Zoom',
      strengths: [
        'อัตราส่วนราคาต่อฟีเจอร์ดีที่สุดในตลาด',
        'กล้องมุมกว้างสุด (151° บน A25) สำหรับห้องเล็ก',
        'ชิปเซ็ต Qualcomm 8550 บน A50 สำหรับประมวลผล AI',
        'โปรแกรมรับรอง Teams และ Zoom ที่แข็งแกร่ง',
        'การพัฒนาและปรับปรุงผลิตภัณฑ์อย่างรวดเร็ว',
        'ตัวเลือกจอแสดงผลที่ดี (MeetingBoard) ด้วยต้นทุนต่ำกว่า',
      ],
      weaknesses: [
        'ถูกมองว่าเป็นแบรนด์ "ประหยัด" เมื่อเทียบกับ Logitech/Cisco',
        'ประสบการณ์ซอฟต์แวร์ยังไม่เนี๊ยบเท่า Neat/Logitech',
        'ฟีเจอร์ AI ยังไม่ละเอียดเท่าคู่แข่งระดับพรีเมียม',
        'คุณภาพเสียงดีแต่ไม่ใช่ระดับสูงสุดในตลาด',
        'เครือข่ายการสนับสนุนบางกว่าในภูมิภาคอเมริกา',
        'มีความกังวลบางประการเกี่ยวกับการสนับสนุนเฟิร์มแวร์ระยะยาว',
      ],
    },
    crestron: {
      tagline: 'ควบคุมทุกอย่าง',
      description:
        'Crestron เป็นยักษ์ใหญ่ด้านระบบอัตโนมัติและการควบคุมที่ยังผลิตฮาร์ดแวร์ VC Videobar 70 ของพวกเขาออกแบบมาสำหรับห้องขนาดใหญ่และผสานรวมอย่างลึกซึ้งกับระบบควบคุมห้อง พวกเขาเป็นตัวเลือกสำหรับการติดตั้ง AV องค์กรระดับสูง',
      strengths: [
        'การผสานรวมระบบอัตโนมัติและการควบคุมห้องอย่างลึกซึ้ง',
        'ไมโครโฟน 24 ตัวบน Videobar 70 — มากที่สุดในบาร์ใดๆ',
        'ระบบกล้อง 4 ตัวสำหรับการต่อภาพวิดีโออัจฉริยะ',
        'ความปลอดภัยและการจัดการระดับองค์กร',
        'เหมาะที่สุดสำหรับห้องขนาดใหญ่/ห้องประชุมย่อยและการติดตั้ง AV แบบกำหนดเอง',
        'แพลตฟอร์มรวมศูนย์สำหรับแสง ม่าน ระบบ AV และ VC',
      ],
      weaknesses: [
        'มากเกินไปสำหรับการติดตั้งง่ายๆ — การตั้งค่าซับซ้อน',
        'ต้องการความเชี่ยวชาญด้าน Crestron เพื่อใช้ประโยชน์สูงสุด',
        'ระบบนิเวศที่แพงที่สุดเมื่อรวมระบบควบคุม',
        'ไม่แข่งขันได้สำหรับการติดตั้งแบบเสียบใช้งานง่าย',
        'ชุดฟีเจอร์ VC เฉพาะทางเล็กกว่าผู้ขายเฉพาะทาง',
        'UX ซอฟต์แวร์ยังไม่เนี๊ยบเท่า Zoom/Teams ดั้งเดิม',
      ],
    },
    lenovo: {
      tagline: 'เทคโนโลยีที่ฉลาดขึ้นสำหรับทุกคน',
      description:
        'ซีรีส์ ThinkSmart ของ Lenovo ใช้ประโยชน์จากความเชี่ยวชาญด้านการผลิต PC Bar 180 มีความเป็นเอกลักษณ์ด้วยกล้องพาโนรามา 180° — เหมาะอย่างยิ่งสำหรับห้องกว้าง พวกเขาทำงานได้ดีในสถานการณ์การทำงานแบบไฮบริดด้วยการผสานรวม PC/ThinkPad ที่แข็งแกร่ง',
      strengths: [
        'กล้องพาโนรามา 180° ที่เป็นเอกลักษณ์พร้อมเซ็นเซอร์ 13MP',
        'ซูมดิจิทัลไร้การสูญเสีย 6x และกรอบภาพอัจฉริยะ',
        'การผสานรวมที่แข็งแกร่งกับระบบนิเวศ ThinkPad/Windows',
        'น้ำหนักเบา (2.2 กก.) และการออกแบบกะทัดรัด',
        'รองรับ BYOD ที่ดี',
        'ราคาที่แข่งขันได้สำหรับชุดฟีเจอร์',
      ],
      weaknesses: [
        'ผู้เล่นใหม่ — ประวัติการติดตามใน VC ยังไม่พิสูจน์แล้ว',
        'แพลตฟอร์มซอฟต์แวร์ยังไม่สมบูรณ์เท่า Logitech Sync',
        'ช่วงผลิตภัณฑ์จำกัดเมื่อเทียบกับคู่แข่งที่มีชุดผลิตภัณฑ์ครบวงจร',
        'รูปแบบพาโนรามา (3840x1080) อาจลำบากบนแพลตฟอร์มบางตัว',
        'โครงสร้างพื้นฐานการสนับสนุนยังคงสร้างอยู่',
        'ความละเอียดกล้องต่ำกว่าคู่แข่ง 4K',
      ],
    },
    dten: {
      tagline: 'ความเรียบง่ายแบบ All-in-One',
      description:
        'DTEN มุ่งเน้นเฉพาะจอแสดงผล All-in-One ที่มี Zoom/Teams ในตัว ซีรีส์ D7X ของพวกเขาครอบคลุมทุกอย่างตั้งแต่อุปกรณ์ส่วนตัวขนาด 27" ไปจนถึงจอแสดงผลห้องประชุมขนาดใหญ่ 75" พวกเขาให้ความสำคัญกับการทำงานร่วมกันแบบสัมผัสเป็นหลักพร้อมฟีเจอร์กระดานดำ',
      strengths: [
        'ออกแบบมาเฉพาะสำหรับ Zoom Rooms และ Teams Rooms',
        'ไมโครโฟน 15 ตัวบนจอแสดงผลขนาดใหญ่ — การรับเสียงยอดเยี่ยม',
        'ประสบการณ์สัมผัสและกระดานดำที่แข็งแกร่ง',
        'BYOD Smart Connect ผ่านสาย USB-C เพียงสายเดียว',
        'ทุกขนาดตั้งแต่ส่วนตัวไปจนถึงห้องขนาดใหญ่ในครอบครัวผลิตภัณฑ์เดียว',
        'การออกแบบสะอาด เรียบง่าย',
      ],
      weaknesses: [
        'จำกัดเฉพาะ Zoom/Teams — ไม่มี Google Meet หรือ Webex',
        'All-in-One หมายความว่าไม่มีการอัปเกรดแบบโมดูล (ติดอยู่กับคุณภาพจอ)',
        'ความฉลาดด้านกล้องด้อยกว่า Neat/Cisco',
        'การรับรู้แบรนด์น้อยกว่านอกระบบนิเวศ Zoom',
        'เครือข่ายการบริการและการสนับสนุนจำกัดเมื่อเทียบกับ Logitech',
        'ราคาระดับพรีเมียมสำหรับจอแสดงผลขนาดใหญ่',
      ],
    },
    maxhub: {
      tagline: 'เพิ่มศักยภาพการทำงานร่วมกัน',
      description:
        'MAXHUB เป็นบริษัทเทคโนโลยีจอแสดงผลของจีนที่ขยายตัวอย่างรวดเร็วสู่จอแสดงผลโต้ตอบและบาร์ VC พวกเขาแข่งขันอย่างดุเดือดด้านสเปก — กล้อง 100MP, ไมโครโฟน 16 ตัว, FOV 180° — ด้วยราคาที่ต่ำกว่าคู่แข่งตะวันตก',
      strengths: [
        'สเปกที่น่าประทับใจ: กล้องคู่ 100MP, ไมโครโฟน 16 ตัว, FOV 180°',
        'พื้นที่รับเสียง 15 เมตร — ยาวที่สุดในตลาด',
        'ราคาที่แข่งขันได้มากที่สุดสำหรับชุดฟีเจอร์',
        'ช่วงขนาดจอแสดงผลกว้าง (55" ถึง 86")',
        'เทคโนโลยี AI ตัดเสียงรบกวน',
        'FlexMount สำหรับการติดตั้งที่ง่ายดาย',
        'ได้รับการรับรอง Teams และ Zoom',
      ],
      weaknesses: [
        'การรับรู้แบรนด์ต่ำนอกเอเชีย',
        'ประสบการณ์ซอฟต์แวร์ยังไม่เนี๊ยบเท่าคู่แข่งตะวันตก',
        'การสนับสนุนระยะยาวและการอัปเดตเฟิร์มแวร์ยังไม่แน่นอน',
        'การรับรู้คุณภาพการประกอบเมื่อเทียบกับ Logitech/Cisco',
        'เครือข่ายการบริการทั่วโลกจำกัด',
        'การตลาดสเปกอาจไม่สะท้อนประสิทธิภาพในโลกจริง',
      ],
    },
  },
  tl: {
    logitech: {
      tagline: 'Swiss engineering, saklaw sa buong mundo',
      description:
        'Ang Logitech ay isa sa pinakakilalang tatak sa mga computer peripheral at video conferencing. Ang kanilang Rally series ang naghahari sa mid-market na may mga maaasahan, maayos na integrated na solusyon. Mayroon silang mga dekada ng karanasan sa audio at malalakas na pakikipagtulungan sa Zoom at Microsoft.',
      strengths: [
        'Malakas na pagkilala sa tatak at pagtitiwala',
        'Mahusay na RightSight AI framing at RightSound noise suppression',
        'Logitech Sync cloud management platform',
        'Suporta sa maraming platform (Zoom, Teams, Google Meet, BYOD)',
        'Modular ecosystem (mic pods, speakers, controllers)',
        'Magandang kalidad ng gawa at track record ng pagiging maaasahan',
      ],
      weaknesses: [
        'Premium pricing — hindi ang pinakamurang opsyon',
        'Ilan sa mga produkto ay "safe" sa halip na makabago',
        'AI features ay nahuhuli sa mga mas bagong kumpanya tulad ng Neat',
        'Mga specs ng camera hardware (MP count) ay mas mababa sa kumpetisyon',
        'Hindi gaanong agresibo sa all-in-one display category',
      ],
    },
    poly: {
      tagline: 'Engineered para sa kalinawan',
      description:
        'Ngayon ay bahagi ng HP, nagdadala ang Poly ng mga dekada ng karanasan sa audio engineering mula sa Plantronics at Polycom. Ang kanilang Studio X series ay pinagsama ang napatunayan na acoustic expertise sa modernong AI camera features. Mayroon silang malakas na presensya sa enterprise telephony.',
      strengths: [
        'Pinakamagandang kalidad ng audio at noise cancellation sa klase',
        'Poly DirectorAI na may smart speaker tracking at group framing',
        'Malakas na enterprise support at infrastructure ng serbisyo',
        'Ang suporta ng HP ay nagbibigay ng supply chain stability',
        'Magandang camera zoom capabilities (5x sa X52/X70)',
        'Poly Lens cloud management',
      ],
      weaknesses: [
        'Integration sa HP ecosystem ay patuloy na nagmamature',
        'Ilan sa lumang Polycom products ay nagkakapatungan kaya nalilito',
        'Software platform (Poly Lens) ay mas bata pa kaysa sa Logitech Sync',
        'Ang disenyo ay maaaring maramdaman bilang corporate/boring',
        'Mas mabagal na mag-adopt ng cutting-edge sensor technology',
      ],
    },
    cisco: {
      tagline: 'Ang network ay ang platform',
      description:
        'Ang Webex Room series ng Cisco ay nagdadala ng enterprise-grade security at integration sa video conferencing. Ang kanilang mga device ay idinisenyo para sa mga organisasyon na nakainvest na sa Cisco/Webex ecosystem, na may top-tier security certifications.',
      strengths: [
        'Enterprise-grade security at compliance',
        'Dual 96MP camera system (Room Bar Pro) — pinakamataas na resolution sa merkado',
        'Malalim na Webex integration at Control Hub management',
        'AI noise removal at facial recognition',
        'RoomOS ay nagbibigay ng consistent na karanasan sa lahat ng device',
        'Malakas na in-room intelligence (bilang ng tao, kalidad ng hangin)',
      ],
      weaknesses: [
        'Premium pricing — kadalasan doble sa mga kakumpitensya',
        'Pinakamagandang karanasan ay nangangailangan ng buong Webex commitment',
        'Mas mahina ang third-party platform support',
        'Komplikadong setup para sa non-Cisco environments',
        'Mas mabagal na feature rollouts kaysa sa mga agile kakumpitensya',
        'Ang hardware ay maaaring maramdaman bilang bulky at outdated',
      ],
    },
    neat: {
      tagline: 'Maganda nang simple',
      description:
        'Ang Neat ay ang tagapag-ugnay — isang Norwegian startup na mula sa wala ay naging paborito ng Zoom/Teams sa loob lamang ng ilang taon. Prioridad nila ang cutting-edge sensors, sleek Scandinavian design, at AI-first features. Ang kanilang mga device ay parang consumer tech, hindi corporate gear.',
      strengths: [
        'Pinakamagandang disenyo at aesthetics sa klase',
        'Cutting-edge sensors: radar (wakeup), depth (ToF), ambient light',
        '100MP dual-camera system (Bar Pro / Board Pro)',
        'Neat Symmetry — pinalalaki ang mga remote at in-room participant',
        'Neat Boundary — virtual room dividers via depth sensor',
        'Pinakamabilis na feature development cycle sa industriya',
        'Google Meet certified (Enero 2026) — sumusuporta ngayon sa Zoom, Teams, at Meet',
        'BYOD mode available sa Bar Gen 2, Bar Pro, Board 50, Board Pro — kumonekta ng laptop via USB-C o gamitin ang standalone BYOD-only mode',
        'Android-based, madalas na software updates',
      ],
      weaknesses: [
        'Bagong kumpanya — mabilis na innovation cycles na may madalas na feature releases',
        'Google Meet ay kararating lang (Enero 2026) — lumalawak nang lampas sa native Zoom/Teams',
        'Lumalaking global support network — sumusunod sa demand',
        'Premium positioning — namumuhunan sa advanced sensors at Scandinavian design',
        'Ang unang hardware generations ay na-refine sa pamamagitan ng patuloy na software updates',
      ],
    },
    yealink: {
      tagline: 'Madaling pakikipagtulungan, mataas na produktibidad',
      description:
        'Ang Yealink ay ang kampeon sa value — isang Chinese manufacturer na nag-aalok ng feature-rich na mga device sa agresibong presyo. Naghahari sila sa Asia at mabilis na nakakakuha ng ground sa Europe/Americas na may Teams-certified at Zoom-certified na mga bar at display.',
      strengths: [
        'Pinakamagandang price-to-feature ratio sa merkado',
        'Ultra-wide cameras (151° sa A25) para sa mga maliit na kwarto',
        'Qualcomm 8550 chipset sa A50 para sa AI processing',
        'Malakas na Teams at Zoom certification program',
        'Mabilis na product development at iteration',
        'Magandang display options (MeetingBoard) sa mas mababang halaga',
      ],
      weaknesses: [
        'Nakikita bilang "budget" brand kumpara sa Logitech/Cisco',
        'Software experience ay mas hindi pa kasing polished ng Neat/Logitech',
        'AI features ay mas hindi pa kasing sopistikado ng premium kakumpitensya',
        'Audio quality ay mabuti ngunit hindi ang pinakamahusay sa klase',
        'Support network ay mas manipis sa Americas',
        'Ilan ay may alalahanin tungkol sa long-term firmware support',
      ],
    },
    crestron: {
      tagline: 'Kontrolin ang lahat',
      description:
        'Ang Crestron ay ang automation at control giant na gumagawa rin ng VC hardware. Ang kanilang Videobar 70 ay idinisenyo para sa mga malalaking kwarto at malalim na integrated sa kanilang room control systems. Sila ang pinipili para sa high-end corporate AV installations.',
      strengths: [
        'Malalim na room automation at control integration',
        '24-microphone array sa Videobar 70 — pinakamaraming mic sa anumang bar',
        '4-camera system para sa intelligent video stitching',
        'Enterprise-grade security at management',
        'Pinakamahusay para sa malaki/huddle spaces at custom AV installs',
        'Unified platform sa lighting, shades, AV, at VC',
      ],
      weaknesses: [
        'Overkill para sa simpleng deployment — komplikadong setup',
        'Nangangailangan ng Crestron expertise para sa buong value',
        'Pinakamahal na ecosystem kapag isinama ang control systems',
        'Hindi competitive para sa simple plug-and-play deployments',
        'Mas maliit na VC-specific feature set vs dedicated vendors',
        'Software UX ay mas hindi pa kasing refined ng Zoom/Teams native',
      ],
    },
    lenovo: {
      tagline: 'Mas matalinong teknolohiya para sa lahat',
      description:
        'Ang ThinkSmart series ng Lenovo ay inaasahan ang kanilang karanasan sa pagmamanufacture ng PC. Ang Bar 180 ay natatangi sa 180° panoramic camera — perpekto para sa malalawak na kwarto. Ang kanila ay gumagana ng maayos sa hybrid work scenarios na may malakas na PC/ThinkPad integration.',
      strengths: [
        'Natatanging 180° panoramic camera na may 13MP sensor',
        '6x lossless digital zoom at intelligent framing',
        'Malakas na integration sa ThinkPad/Windows ecosystem',
        'Magaan (2.2kg) at compact na disenyo',
        'Magandang BYOD support',
        'Competitive pricing para sa feature set',
      ],
      weaknesses: [
        'Mas bagong player — mas hindi pa napatunayan ang track record sa VC',
        'Software platform ay mas bata pa kaysa sa Logitech Sync',
        'Limited product range vs full-suite competitors',
        'Ang panoramic format (3840x1080) ay maaaring awkward sa ilang platform',
        'Support infrastructure ay patuloy na nagtatayo',
        'Camera resolution ay mas mababa sa 4K competitors',
      ],
    },
    dten: {
      tagline: 'All-in-one simplicity',
      description:
        'Ang DTEN ay nakatuon lamang sa mga all-in-one display na may built-in Zoom/Teams. Ang kanilang D7X series ay sumasaklaw sa lahat mula sa personal na 27" device hanggang sa malalaking 75" room displays. Prioridad nila ang touch-first collaboration na may whiteboard features.',
      strengths: [
        'Purpose-built para sa Zoom Rooms at Teams Rooms',
        '15-microphone array sa mas malalaking display — mahusay na audio pickup',
        'Malakas na touch at whiteboard experience',
        'BYOD Smart Connect sa pamamagitan ng isang USB-C cable',
        'Lahat ng sizes mula personal hanggang malaking kwarto sa isang product family',
        'Malinis, minimalist na disenyo',
      ],
      weaknesses: [
        'Limitado sa Zoom/Teams — walang Google Meet o Webex',
        'All-in-one nangangahulugang walang modular upgrades (stuck sa display quality)',
        'Mas kaunting camera intelligence kaysa sa Neat/Cisco',
        'Mas mababang brand recognition sa labas ng Zoom ecosystem',
        'Service at support network ay limitado kumpara sa Logitech',
        'Premium pricing para sa mas malalaking display',
      ],
    },
    maxhub: {
      tagline: 'Maximize ang pakikipagtulungan',
      description:
        'Ang MAXHUB ay isang Chinese display technology company na agresibong lumawak sa interactive displays at VC bars. Kompetitibo sila sa specs — 100MP cameras, 16-mic arrays, 180° FOV — sa presyong mas mababa sa mga Western competitor.',
      strengths: [
        'Agresibong specs: 100MP dual-lens, 16-mic array, 180° FOV',
        '15-meter voice pickup range — pinakamahabang sa klase',
        'Pinakakompetitibong pricing para sa feature set',
        'Malawak na range ng display sizes (55" hanggang 86")',
        'AI Noise Cancellation technology',
        'FlexMount para sa madaling pag-install',
        'Teams at Zoom certified',
      ],
      weaknesses: [
        'Mababang brand recognition sa labas ng Asia',
        'Software experience ay mas hindi pa kasing refined ng Western competitors',
        'Long-term support at firmware updates ay hindi pa sigurado',
        'Perception ng build quality vs Logitech/Cisco',
        'Limitadong global service network',
        'Spec-sheet marketing ay maaaring hindi sumalamin sa totoong performance',
      ],
    },
  },
    id: {
      logitech: {
        tagline: 'Teknik Swiss, jangkauan global',
        description:
          'Logitech adalah salah satu nama paling dikenal dalam perangkat keras komputer dan video conferencing. Seri Rally mereka mendominasi segmen menengah dengan solusi yang andal dan terintegrasi dengan baik. Mereka memiliki dekade keahlian audio dan kemitraan kuat dengan Zoom dan Microsoft.',
        strengths: [
          'Pengenalan merek yang kuat dan dipercaya',
          'RightSight AI framing dan RightSound noise suppression yang sangat baik',
          'Platform manajemen cloud Logitech Sync',
          'Dukungan platform luas (Zoom, Teams, Google Meet, BYOD)',
          'Ekosistem modular (mic pods, speaker, controller)',
          'Kualitas build yang baik dan rekam jejak keandalan',
        ],
        weaknesses: [
          'Harga premium — bukan pilihan termurah',
          'Beberapa produk terasa "aman" daripada inovatif',
          'Fitur AI tertinggal dari pendatang baru seperti Neat',
          'Spesifikasi perangkat keras kamera (jumlah MP) lebih rendah dari kompetitor',
          'Kurang agresif dalam kategori all-in-one display',
        ],
      },
      poly: {
        tagline: 'Dirancang untuk kejelasan',
        description:
          'Kini bagian dari HP, Poly membawa warisan dekade teknik audio dari Plantronics dan Polycom. Seri Studio X mereka menggabungkan keahlian akustik yang terbukti dengan fitur kamera AI modern. Mereka memiliki kehadiran yang kuat dalam teleponi perusahaan.',
        strengths: [
          'Kualitas audio dan noise cancellation terbaik di kelasnya',
          'Poly DirectorAI dengan pelacakan speaker pintar dan framing grup',
          'Infrastruktur dukungan dan layanan perusahaan yang kuat',
          'Dukungan HP memberikan stabilitas rantai pasok',
          'Kemampuan zoom kamera yang baik (5x pada X52/X70)',
          'Manajemen cloud Poly Lens',
        ],
        weaknesses: [
          'Integrasi dengan ekosistem HP masih dalam tahap pematangan',
          'Tumpang tindih produk Polycom lama menimbulkan kebingungan',
          'Platform perangkat lunak (Poly Lens) kurang matang dibanding Logitech Sync',
          'Estetika desain bisa terasa korporat/membosankan',
          'Lebih lambat mengadopsi teknologi sensor mutakhir',
        ],
      },
      cisco: {
        tagline: 'Jaringan adalah platform',
        description:
          'Seri Webex Room Cisco membawa keamanan tingkat perusahaan dan integrasi ke video conferencing. Perangkat mereka dirancang untuk organisasi yang telah berinvestasi dalam ekosistem Cisco/Webex, dengan sertifikasi keamanan kelas atas.',
        strengths: [
          'Keamanan dan kepatuhan tingkat perusahaan',
          'Sistem kamera ganda 96MP (Room Bar Pro) — resolusi tertinggi di pasaran',
          'Integrasi Webex yang mendalam dan manajemen Control Hub',
          'AI noise removal dan pengenalan wajah',
          'RoomOS memberikan pengalaman yang konsisten di semua perangkat',
          'Kecerdasan dalam-ruangan yang kuat (jumlah orang, kualitas udara)',
        ],
        weaknesses: [
          'Harga premium — sering 2x dari kompetitor',
          'Pengalaman terbaik memerlukan komitmen Webex penuh',
          'Dukungan platform pihak ketiga lebih lemah',
          'Setup yang kompleks untuk lingkungan non-Cisco',
          'Peluncuran fitur lebih lambat dari kompetitor yang gesit',
          'Perangkat keras bisa terasa besar dan ketinggalan zaman',
        ],
      },
      neat: {
        tagline: 'Indah dalam kesederhanaan',
        description:
          'Neat adalah pengganggu — startup Norwegia yang dari nol menjadi favorit Zoom/Teams dalam beberapa tahun saja. Mereka memprioritaskan sensor mutakhir, desain Scandinavian yang ramping, dan fitur AI-first. Perangkat mereka terasa seperti teknologi konsumen, bukan peralatan korporat.',
        strengths: [
          'Desain dan estetika terbaik di kelasnya',
          'Sensor mutakhir: radar (bangun), kedalaman (ToF), cahaya ambient',
          'Sistem kamera ganda 100MP (Bar Pro / Board Pro)',
          'Neat Symmetry — menyamakan ukuran peserta jarak jauh dan di ruangan',
          'Neat Boundary — pembatas ruangan virtual melalui sensor kedalaman',
          'Siklus pengembangan fitur tercepat di industri',
          'Google Meet bersertifikat (Jan 2026) — kini mendukung Zoom, Teams, dan Meet',
          'Mode BYOD tersedia di Bar Gen 2, Bar Pro, Board 50, Board Pro — hubungkan laptop apa pun melalui USB-C atau gunakan mode BYOD-only mandiri',
          'Berbasis Android, pembaruan perangkat lunak sering',
        ],
        weaknesses: [
          'Perusahaan yang lebih baru — siklus inovasi cepat dengan peluncuran fitur yang sering',
          'Google Meet baru ditambahkan (Jan 2026) — meluas dari Zoom/Teams asli',
          'Jaringan dukungan global yang sedang berkembang — berkembang sesuai permintaan',
          'Posisi premium — investasi dalam sensor canggih dan desain Scandinavian',
          'Generasi perangkat keras awal disempurnakan melalui pembaruan perangkat lunak yang berkelanjutan',
        ],
      },
      yealink: {
        tagline: 'Kolaborasi mudah, produktivitas tinggi',
        description:
          'Yealink adalah juara nilai — produsen China yang menawarkan perangkat kaya fitur dengan harga agresif. Mereka mendominasi di Asia dan dengan cepat mendapatkan pangsa pasar di Eropa/Amerika dengan bar dan display yang bersertifikat Teams dan Zoom.',
        strengths: [
          'Rasio harga-ke-fitur terbaik di pasaran',
          'Kamera ultra-wide (151° pada A25) untuk ruangan kecil',
          'Chipset Qualcomm 8550 pada A50 untuk pemrosesan AI',
          'Program sertifikasi Teams dan Zoom yang kuat',
          'Pengembangan produk dan iterasi yang cepat',
          'Pilihan display yang baik (MeetingBoard) dengan biaya lebih rendah',
        ],
        weaknesses: [
          'Dianggap sebagai merek "budget" dibandingkan Logitech/Cisco',
          'Pengalaman perangkat lunak kurang halus dibandingkan Neat/Logitech',
          'Fitur AI kurang canggih dibandingkan kompetitor premium',
          'Kualitas audio baik tetapi tidak terbaik di kelasnya',
          'Jaringan dukungan lebih tipis di Amerika',
          'Beberapa kekhawatiran tentang dukungan firmware jangka panjang',
        ],
      },
      crestron: {
        tagline: 'Kendalikan segalanya',
        description:
          'Crestron adalah raksasa otomatisasi dan kontrol yang juga membuat perangkat keras VC. Videobar 70 mereka dibangun untuk ruangan besar dan terintegrasi mendalam dengan sistem kontrol ruangan mereka. Mereka adalah pilihan untuk instalasi AV korporat kelas atas.',
        strengths: [
          'Integrasi otomatisasi dan kontrol ruangan yang mendalam',
          'Array mikrofon 24 pada Videobar 70 — mikrofon paling banyak di bar apa pun',
          'Sistem kamera 4 untuk stitching video cerdas',
          'Keamanan dan manajemen tingkat perusahaan',
          'Terbaik untuk ruang besar/huddle dan instalasi AV khusus',
          'Platform terpadu untuk pencahayaan, tirai, AV, dan VC',
        ],
        weaknesses: [
          'Berlebihan untuk deployment sederhana — setup yang kompleks',
          'Memerlukan keahlian Crestron untuk nilai penuh',
          'Ekosistem paling mahal jika memperhitungkan sistem kontrol',
          'Tidak kompetitif untuk deployment plug-and-play sederhana',
          'Set fitur VC-spesifik lebih kecil dibanding vendor khusus',
          'UX perangkat lunak kurang halus dibandingkan Zoom/Teams asli',
        ],
      },
      lenovo: {
        tagline: 'Teknologi yang lebih pintar untuk semua orang',
        description:
          'Seri ThinkSmart Lenovo memanfaatkan keahlian manufaktur PC mereka. Bar 180 unik dengan kamera panoramik 180° — sempurna untuk ruangan lebar. Mereka berfungsi baik dalam skenario kerja hibrida dengan integrasi PC/ThinkPad yang kuat.',
        strengths: [
          'Kamera panoramik 180° yang unik dengan sensor 13MP',
          'Zoom digital lossless 6x dan framing cerdas',
          'Integrasi yang kuat dengan ekosistem ThinkPad/Windows',
          'Ringan (2,2kg) dan desain yang kompak',
          'Dukungan BYOD yang baik',
          'Harga yang kompetitif untuk set fitur',
        ],
        weaknesses: [
          'Pemain yang lebih baru — rekam jejak yang kurang terbukti di VC',
          'Platform perangkat lunak kurang matang dibandingkan Logitech Sync',
          'Rentang produk yang terbatas dibandingkan kompetitor full-suite',
          'Format panoramik (3840x1080) bisa terasa canggung di beberapa platform',
          'Infrastruktur dukungan masih dalam tahap pembangunan',
          'Resolusi kamera lebih rendah dari kompetitor 4K',
        ],
      },
      dten: {
        tagline: 'Kesederhanaan all-in-one',
        description:
          'DTEN fokus secara eksklusif pada display all-in-one dengan Zoom/Teams bawaan. Seri D7X mereka mencakup segalanya mulai dari perangkat pribadi 27" hingga display ruangan besar 75". Mereka memprioritaskan kolaborasi sentuh-pertama dengan fitur whiteboard.',
        strengths: [
          'Dibangun khusus untuk Zoom Rooms dan Teams Rooms',
          'Array mikrofon 15 pada display yang lebih besar — penangkapan audio yang sangat baik',
          'Pengalaman sentuh dan whiteboard yang kuat',
          'BYOD Smart Connect melalui satu kabel USB-C',
          'Semua ukuran dari pribadi hingga ruangan besar dalam satu keluarga produk',
          'Desain yang bersih dan minimalis',
        ],
        weaknesses: [
          'Terbatas pada Zoom/Teams — tidak ada Google Meet atau Webex',
          'All-in-one berarti tidak ada peningkatan modular (terpaku pada kualitas display)',
          'Kecerdasan kamera kurang dari Neat/Cisco',
          'Pengenalan merek lebih kecil di luar ekosistem Zoom',
          'Jaringan layanan dan dukungan terbatas dibandingkan Logitech',
          'Harga premium untuk display yang lebih besar',
        ],
      },
      maxhub: {
        tagline: 'Maksimalkan kolaborasi',
        description:
          'MAXHUB adalah perusahaan teknologi display China yang berkembang agresif ke display interaktif dan bar VC. Mereka bersaing ketat pada spesifikasi — kamera 100MP, array 16-mic, FOV 180° — dengan harga yang mengalahkan kompetitor Barat.',
        strengths: [
          'Spesifikasi agresif: kamera ganda 100MP, array 16-mic, FOV 180°',
          'Jangkauan penangkapan suara 15 meter — terpanjang di kelasnya',
          'Harga paling kompetitif untuk set fitur',
          'Rentang ukuran display yang luas (55" hingga 86")',
          'Teknologi AI Noise Cancellation',
          'FlexMount untuk pemasangan yang mudah',
          'Bersertifikat Teams dan Zoom',
        ],
        weaknesses: [
          'Pengenalan merek rendah di luar Asia',
          'Pengalaman perangkat lunak kurang halus dibandingkan kompetitor Barat',
          'Dukungan jangka panjang dan pembaruan firmware tidak pasti',
          'Persepsi kualitas build dibandingkan Logitech/Cisco',
          'Jaringan layanan global terbatas',
          'Pemasaran spesifikasi mungkin tidak mencerminkan kinerja dunia nyata',
        ],
      },
    },
};

export function getTranslatedCompany(company: CompanyProfile, lang: string): CompanyProfile {
  const trans = companyTranslations[lang]?.[company.id];
  if (!trans) return company;
  return {
    ...company,
    tagline: trans.tagline,
    description: trans.description,
    strengths: trans.strengths,
    weaknesses: trans.weaknesses,
  };
}
