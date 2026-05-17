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
        'Dựa trên Android, cập nhật phần mềm thường xuyên',
      ],
      weaknesses: [
        'Công ty trẻ — lo ngại hỗ trợ dài hạn so với Cisco/Logitech',
        'Hỗ trợ nền tảng bên thứ ba hạn chế (chỉ Zoom/Teams)',
        'Không có chế độ BYOD trên hầu hết thiết bị',
        'Mạng lưới hỗ trợ/dịch vụ toàn cầu nhỏ hơn',
        'Giá cao hơn các lựa chọn thay thế Yealink/MAXHUB',
        'Một số vấn đề độ tin cậy được báo cáo ở các thế hệ đầu',
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
