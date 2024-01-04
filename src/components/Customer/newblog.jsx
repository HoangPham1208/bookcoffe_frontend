import { Navbar } from "../navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { customTheme } from "../Utils/myButton";

export default function Blogs() {
  const navigate = useNavigate();
  // Array of blog entries
  const blogEntries = [
    {
      imageSrc: "/blog-1.png",
      title: "Tuyển tập những đầu sách bạn nên đọc",
      date: "27/10/2023",
      content: `Sách là viên ngọc tri thức của nhân loại và có ảnh hưởng rất lớn tới cuộc sống con người. Nhờ đọc được những cuốn sách hay mà người ta có thể thay đổi cách sống, cải thiện tinh thần và có những định hướng đúng đắn cho sự nghiệp.
    
      Dưới đây là 10 cuốn sách hay nhất mọi thời đại đã mang lại động lực sống mạnh mẽ cho nhiều người.
      
      1. Đắc nhân tâm
      
      Đắc nhân tâm là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Đây là quyển sách liên tục đứng đầu danh mục sách bán chạy nhất (do báo The New York Times bình chọn suốt 10 năm liền. Tác phẩm được đánh giá là quyển sách đầu tiên và hay nhất, có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới.
      
      Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi chúng ta.
      
      Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie.
      
      Từ khi “Đắc nhân tâm” đến tay độc giả, nó đã khiến người đọc nhận ra rằng họ có thể tiết chế được các mối quan hệ trong và ngoại lề công việc, và trên thực tế thì hai mối quan hệ ấy không bao giờ tách rời nhau.
      
      Câu trích hay nhất trong cuốn sách này đó là: “Có một sự thật là tất cả những người bạn gặp đều tự cảm thấy họ hơn bạn theo một cách nào đấy, và con đường thẳng dẫn tới trái tim họ là để họ nhận ra rằng bạn công nhận tầm quan trọng của họ, và sự ghi nhận đó là chân thành”.
      
      2. Cách nghĩ để thành công
      
      Cách nghĩ để thành công là cuốn sách đầu tiên đưa ra triết lý thành đạt - một triết lý đầy đủ và toàn diện về thành công của cá nhân, đồng thời cung cấp cho bạn phương pháp để tạo ra kế hoạch sơ bộ và chi tiết để đạt được thành công đó.
      
      Được viết ra từ vô số những câu chuyện có thật của những người vĩ đại như Edison - nhà phát minh lỗi lạcmà thời gian rèn luyện trong trường học chỉ... vỏn vẹn 3 tháng, như Henry Ford - người bị coi là không có học vấn nhưng đã trở thành ông trùm trong nền công nghiệp xe hơi với một gia tài kết xù..., tác phẩm có một sức thuyết phục và lay động rất lớn,. Napoleon Hill đã dành hầu như toàn bộ thời gian và công sức trong suốt gần ba mươi năm để phỏng vấn hơn 500 người nổi tiếng và thành công nhất trong nhiều lĩnh vực khác nhau, cùng hàng ngàn doanh nhân khác - cả những kẻ thất bại và những người thành công.
      
      Với hơn 60 triệu bản đã được bán trong 70 năm kể từ khi ra đời, những đúc kết về thành công của Napoleon Hill đến nay vẫn không hề bị lỗi thời, ngược lại, thời gian chính là minh chứng sống động cho tính đúng đắn của những bí quyết mà ông chia sẻ.
      
      Câu trích hay nhất của cuốn sách này đó là: “ Những đột phá cần có trong cuộc đời đang nằm trong chính trí tưởng tượng của bạn. Trí tưởng tượng là xưởng máy trong đầu bạn, có thể biến năng lượng tư duy thành thành tựu và của cải”.
      
      3. 7 thói quen của người thành đạt 
      
      Tác giả Steven Covey đã vẽ nên tấm bản đồ hướng đi cho cuộc sống và đưa nó vào trang sách để giúp người đọc không chỉ hình thành những thói quen sinh hoạt hợp lý mà còn giúp họ trở thành người tốt, sống có ích hơn.
      
      Câu trích hay nhất trong cuốn sách này là: “gieo mầm suy nghĩ sẽ gặt hái hành vi, gieo mầm hành vi sẽ gặt hái thói quen, gieo mầm thói quen sẽ gặt hái tính cách, gieo mầm tính cách sẽ gặt hái số phận”.
      
      4. Cuộc sống không giới hạn
      
      Cuộc Sống Không Giới Hạn - Nick Vujic- Câu Chuyện Diệu Kỳ Của Chàng Trai Đặc Biệt Nhất Hành Tinh“.
      "Bạn đẹp đẽ và quý giá hơn tất cả những viên kim cương trên thế gian này. Dẫu vậy, chúng ta nên luôn luôn đặt ra cho mình mục tiêu trở thành những con người tốt hơn, toàn thiện hơn, đẩy lùi và loại bỏ những giới hạn bằng cách mơ những giấc mơ lớn lao. Trong hành trình đó, chúng ta luôn cần có những điều chỉnh (bởi vì cuộc đời này không phải lúc nào cũng toàn là màu hồng), nhưng cuộc đời này luôn đáng sống. Tôi đến đây để nói với bạn rằng cho dù bạn đang ở trong hoàn cảnh nào, miễn là bạn còn thở, thì bạn vẫn có thể đóng góp cho cuộc đời này…” 
      
      5. Hành trình về Phương Đông
      
      Hành trình về phương đông” là một phần trong bộ hồi ký nổi tiếng của giáo sư Blair T. Spalding (1857 – 1953). Cuốn sách kể chuyện một đoàn khoa học gồm các chuyên môn khác nhau Hội Khoa học Hoàng gia Anh (tức Viện Hàn lâm Khoa học) cử sang Ấn Độ nghiên cứu về “huyền học”. Sau hai năm trời lang thang khắp các đền chùa Ấn Độ, chứng kiến nhiều cảnh mê tín dị đoan, thậm chí “làm tiền” du khách, của nhiều pháp sư, đạo sĩ rởm, họ được tiếp xúc với những vị chân tu sống ẩn danh ở thành phố hay trên rặng Tuyết Sơn. Nhờ thế, họ được chứng kiến, hiểu biết đúng đắn về các khoa học cổ xưa và bí truyền của văn hóa Ấn Độ như yoga, thuật chiêm tinh, các phép dưỡng sinh và chữa bệnh, quan niệm về cõi sống và cõi chết.
      
      “Mọi vật trong vũ trụ đều quân bình tuyệt đối, không dư, không thiếu, từ hạt bụi bé nhỏ đến những dãy thiên hà vĩ đại. Đời người quá ngắn, và luôn bị lôi cuốn vào sinh hoạt quay cuồng. Đâu mấy ai ý thức được sự phung phí hôm nay, dọn đường cho sự đau khổ ngày mai. Tất cả chỉ là những ảo ảnh chập chờn, thế mà người ta cứ coi như thật. Nếu biết thức tỉnh quan sát, ta có thể học hỏi biết bao điều hay. Tiếc rằng khi đắc thời người ta quên đi quá khứ rất nhanh. Chỉ trong đau khổ, nhục nhã ê chề mới chịu học. Có thể đó cũng là lý do luôn luôn có các biến động vô thường, thúc dục con người học hỏi.”
      
      6. Người giàu có nhất thành Babylon
      
      Những trang sách trong cuốn sách Người giàu có nhất thành Babylon sẽ đưa chúng ta trở lại vương quốc Babylon cổ đại, cái nôi nuôi dưỡng những nguyên lý cơ bản về tài chính mà giờ đây con người hiện đại đã kế thừa và vận dụng trên toàn thế giới. Cuốn sách nói về những thành công, những thành quả đạt được của từng cá nhân sống trong thành Babylon cổ đại. Từ đó, giúp mọi người hiểu rõ hơn về vấn đề tài chính và cống hiến các kế sách và phương pháp làm giàu. Những bí quyết này giúp bạn đánh giá đúng giá trị của đồng tiền, và hướng dẫn bạn cách thực hành theo những nguyên lý tài chính.
      
      Đối với những độc giả không làm trong môi trường kinh doanh, quyển sách sẽ đưa ra những bí quyết giúp bạn gia tăng số tiền trong tài khoản và giải quyết nhanh chóng được những khó khăn về mặt tài chính. Còn đối với doanh nhân, thì những câu chuyện kể về người thương gia giàu có sẽ trở thành những bài học kinh điển và các bạn có thể áp dụng những nguyên lý sáng giá nhất của nó để đem lại thành công trong các chiến lược kinh doanh của mình.
      
      7. Quẳng gánh lo đi mà vui sống
      
      Cuốn sách cùng bộ với Đắc nhân tâm được đánh giá là cuốn sách rất hay. Mang đến cho bạn sự tự tin, niềm vui, cách vượt lên những nỗi đau.
      
      8. Bộ sách – Hạt giống tâm hồn
      
      Bộ sách Hạt giống tâm hồn là tập hợp những câu truyện hay trong cuộc sống. Những câu truyện thành đạt, những câu truyện về tấm lòng cao đẹp. Nuôi dưỡng một tâm hồn trong sáng, cho bạn một cuộc sống luôn vui tươi với những hạnh phúc giản dị.
      
      9. Tốc độ của niềm tin
      
      Như những sóng gợn trong hồ nước, Tốc độ của Niềm tin bắt đầu từ bên trong mỗi con người chúng ta, rồi lan sang các mối quan hệ của chúng ta, các tổ chức nơi chúng ta hoạt động, các mối quan hệ trên thương trường và cuối cùng tỏa ra khắp nơi trên thế giới. Covey trình bày bản đồ hành trình để xây dựng niềm tin ở mọi cấp độ, xây dựng tính cách và năng lực, nâng cao mức độ tin cậy và thiết lập sự lãnh đạo truyền cảm hứng cho mọi người.
      
      10. Thói quen thứ 8
      Thói quen thứ 8 - Một giải pháp mới dành cho lãnh đạo trong thời đại kinh tế tri thức và cho những ai đang tìm cách định vị bản thân. Trong cuốn The 7 Habits of Highly Effective People, Covey đã chỉ cách làm cho ta trở nên đắc lực, làm việc có hiệu quả. Tuy nhiên, so với hoàn cảnh lúc quyển sách ra đời, thế giới ngày nay đã khác, nhiều thách thức hơn và cũng phức tạp hơn. Covey đã bỏ ra năm năm nghiên cứu, soạn thảo, thử nghiệm để cuối cùng trình làng cuốn Thói quen thứ 8 cho thời kỳ mà Covey mệnh danh là Thời đại của người lao động tri thức (the Knowledge Worker Age). `,
    },
    {
      imageSrc: "/blog-2.png",
      title: "Top 10 sách bán chạy trong tháng - 12/2023",
      date: "27/10/2023",
      content: `"Cây cam ngọt của tôi", "Sapiens - Lược sử loài người", "Muôn kiếp nhân sinh"... nằm trong top ấn phẩm bán chạy của các đơn vị sách năm qua.
      Sapiens: lược sử loài người của Yuval Noah Harari (Nguyễn Thủy Chung dịch, Võ Minh Tuấn hiệu đính), kể về lịch sử loài người gồm bốn giai đoạn: cách mạng nhận thức, cách mạng nông nghiệp và sự thống nhất của loài người đến cách mạng khoa học. Trong đó, Harari nhiều lần cảnh báo về sự tiến hóa quá nhanh của con người so với quy luật tự nhiên và hậu quả là có nhiều thảm họa xảy ra. Tác phẩm xuất bản lần đầu tại Israel năm 2011, đến nay được dịch ra 65 ngôn ngữ, thu hút khoảng 20 triệu độc giả, được các nhà phê bình đánh giá cao. Tỷ phú Bill Gates từng khen ngợi Harari kể về lịch sử loài người theo cách dễ hiểu nhất. Đại diện nhà phát hành Omega+ cho biết cuốn sách luôn nằm trong top tác phẩm bán chạy nhất năm của đơn vị, kể từ khi phát hành tại Việt Nam năm 2017. Ảnh: Omega+
      
      Dịch bệnh gây ảnh hưởng lớn đến hoạt động xuất bản, phát hành sách năm 2021. Tuy nhiên, nhiều tác phẩm được công chúng đón nhận. Một số nhà xuất bản, công ty phát hành chọn danh sách bán chạy của họ, dựa trên số liệu phát hành riêng của đơn vị.
      "Sapiens: lược sử loài người" của Yuval Noah Harari (Nguyễn Thủy Chung dịch, Võ Minh Tuấn hiệu đính), luôn nằm trong top tác phẩm best-seller của Omega +, kể từ khi phát hành tại Việt Nam năm 2017 đến nay với khoàng 120.000 bản, riêng 2021 là gần 10.000 bản. Sách kể về lịch sử loài người gồm bốn giai đoạn: cách mạng nhận thức, cách mạng nông nghiệp và sự thống nhất của loài người đến cách mạng khoa học. Trong đó, Harari nhiều lần cảnh báo về sự tiến hóa quá nhanh của con người so với quy luật tự nhiên và hậu quả là có nhiều thảm họa xảy ra.
      Tác phẩm xuất bản lần đầu tại Israel năm 2011, đến nay được dịch ra 65 ngôn ngữ, thu hút khoảng 20 triệu độc giả, được các nhà phê bình đánh giá cao. Tỷ phú Bill Gates từng khen ngợi Harari kể về lịch sử loài người theo cách dễ hiểu nhất.
      Muôn kiếp nhân sinh do Nguyên Phong viết, kể về trải nghiệm tiền kiếp của doanh nhân tài chính Thomas. Ông mơ thấy các kiếp của mình sau khi được người đàn ông gốc Ấn - Kris - chỉ dẫn. Việc nhớ lại tiền kiếp đòi hỏi tu tập công phu nghiêm túc, và Thomas trong kiếp cũ rèn luyện để bản thân ở hiện tại có khả năng tìm về quá khứ. Tác phẩm thể hiện các quan điểm nhân sinh và khơi gợi định nghĩa về thực thể - vật chất. Cuộc đời là các vòng xoáy. Mỗi vòng gồm bốn giai đoạn: thành, trụ, hoại, diệt (hình thành, phát triển, lụi tàn, biến mất). Tương lai ra sao còn tùy vào thái độ ứng xử của mỗi người. Theo ông Nguyễn Văn Phước - giám đốc công ty First News, Trí Việt, sách bán được 100.219 bản trong năm qua. Ảnh: First News
      
      "Muôn kiếp nhân sinh" do Nguyên Phong viết, kể về trải nghiệm tiền kiếp của doanh nhân tài chính Thomas. Ông mơ thấy các kiếp của mình sau khi được người đàn ông gốc Ấn - Kris - chỉ dẫn. Việc nhớ lại tiền kiếp đòi hỏi tu tập công phu nghiêm túc và Thomas trong kiếp cũ rèn luyện để bản thân ở hiện tại có khả năng tìm về quá khứ.
      Tác phẩm thể hiện các quan điểm nhân sinh và khơi gợi định nghĩa về thực thể - vật chất. Cuộc đời là các vòng xoáy. Mỗi vòng gồm bốn giai đoạn: thành, trụ, hoại, diệt (hình thành, phát triển, lụi tàn, biến mất). Tương lai ra sao còn tùy vào thái độ ứng xử của mỗi người. Theo ông Nguyễn Văn Phước - giám đốc công ty First News - Trí Việt, sách bán được 100.219 bản trong năm 2021.
      Cây cam ngọt của tôi (Nguyễn Bích Lan - Tô Yến Ly dịch, Nhã Nam và Nhà xuất bản Hội Nhà Văn), kể về tuổi thơ cậu bé Zezé trong khu xóm nghèo ở thủ đô Rio de Janeiro. Zezé đặt tên cho cây cam trong vườn là Minguinho và xem nó là bạn thân. Cậu tưởng tượng ra khung cảnh cả hai trò chuyện, vui chơi, cùng nhau bước qua tuổi thơ khốn khó nhưng không tuyệt vọng. Tiểu thuyết xuất bản lần đầu năm 1968 ở Brazil, là tác phẩm thành công nhất của nhà văn José Mauro de Vasconcelos (1920 - 1984). Sách được đưa vào chương trình tiểu học của Brazil, chuyển thể thành phim điện ảnh và được hơn 20 quốc gia mua bản quyền. Ảnh: Nhã Nam
      
      "Cây cam ngọt của tôi" (Nguyễn Bích Lan - Tô Yến Ly dịch) đứng đầu danh sách top 10 tác phẩm văn học bán chạy của Nhã Nam. Đại diện nhà phát hành Tiki cho biết ấn phẩm này được đặt mua nhiều nhất trên sàn năm qua.
      Tác phẩm kể về tuổi thơ cậu bé Zezé trong khu xóm nghèo ở thủ đô Rio de Janeiro. Zezé đặt tên cho cây cam trong vườn là Minguinho và xem nó là bạn thân. Cậu tưởng tượng khung cảnh cả hai trò chuyện, vui chơi, cùng nhau bước qua tuổi thơ khốn khó nhưng không tuyệt vọng.
      Tiểu thuyết xuất bản lần đầu năm 1968 ở Brazil, là tác phẩm thành công nhất của nhà văn José Mauro de Vasconcelos (1920 - 1984). Sách được đưa vào chương trình tiểu học của Brazil, chuyển thể thành phim điện ảnh và được hơn 20 quốc gia mua bản quyền.
      Ngoài ra, danh sách tác phẩm được đông đảo độc giả chọn năm qua của Nhã Nam còn có: "Đại dương đen" (Đặng Hoàng Giang), "21 bài học cho thế kỷ 21" (Yuval Noah Harari), "How psychology works - Hiểu hết về tâm lý học" (DK), "Xứ cát" (Frank Herbert)...
      Chuyện nhỏ Sài Gòn bao nhớ là tác phẩm bán chạy nhất của Nhà xuất bản Trẻ năm qua. Qua góc nhìn của tác giả Đàm Hà Phú - một chàng trai ở tỉnh lên thành phố làm việc, Sài Gòn hiện lên sống động với những con hẻm đông đúc, nhộn nhịp, món ăn quen thuộc, những mảnh đời mưu sinh vất vả và những tấm lòng nồng hậu, phóng khoáng. Trên mạng xã hội, nhiều độc giả nói xúc động khi đọc tác phẩm, đặc biệt là trong thời gian Sài Gòn giãn cách vì dịch. Ảnh: NXB Trẻ
      
      "Chuyện nhỏ Sài Gòn bao nhớ" của Nhà xuất bản Trẻ là một trong những tác phẩm bán chạy năm qua. Qua góc nhìn của tác giả Đàm Hà Phú - chàng trai ở tỉnh lên thành phố học tập, làm việc, Sài Gòn hiện lên sống động với những con hẻm đông đúc, nhộn nhịp, món ăn quen thuộc, những mảnh đời mưu sinh vất vả và tấm lòng nồng hậu, phóng khoáng. Trên mạng xã hội, nhiều độc giả nói xúc động khi đọc tác phẩm trong thời gian Sài Gòn giãn cách, chịu nhiều mất mát vì dịch.
      Trong danh sách bán chạy của Nhà xuất bản Trẻ có bộ ấn phẩm minh họa màu: "Cho tôi xin một vé đi tuổi thơ", "Tôi là Bê Tô" của Nguyễn Nhật Ánh, "Vừa nhắm mắt vừa mở cửa sổ" của Nguyễn Ngọc Thuần, "Cánh đồng bất tận" của Nguyễn Ngọc Tư. Ngoài ra còn có, "Đà Lạt những cuộc gặp gỡ" (Nguyễn Vĩnh Nguyên), "Sài Gòn những mảnh ghép rời ký ức" (Lê Văn Nghĩa), "Tôi tự học" bản đặc biệt (Thu giang Nguyễn Duy Cần)...
      Những tù nhân của địa lý - Khám phá sự vận hành của thế giới qua những tấm bản đồ của Tim Marshall, Nguyễn Xuân Hồng dịch là tác phẩm bán chạy nhất của nhà xuất bản Kim Đồng năm qua. Từ góc nhìn địa lý, sách lý giải quá trình hình thành, lịch sử và đặc thù của các vùng đất khác nhau trên thế giới. Tác phẩm giản lược nội dung, kết hợp tranh minh họa nhằm phù hợp độc giả trẻ. Ảnh: Kim Đồng.
      
      "Những tù nhân của địa lý - Khám phá sự vận hành của thế giới qua những tấm bản đồ" của Tim Marshall, Nguyễn Xuân Hồng dịch là tác phẩm bán chạy nhất của Nhà xuất bản Kim Đồng. Từ góc nhìn địa lý, sách lý giải quá trình hình thành, lịch sử và đặc thù của các vùng đất khác nhau trên thế giới. Tác phẩm giản lược nội dung, kết hợp tranh minh họa nhằm phù hợp độc giả trẻ.
      Top 10 tác phẩm của Kim Đồng còn có "Chang hoang dã - Gấu" (tác giả Trang Nguyễn, Nhà xuất bản Kim Đồng phát hành), "Nhâm nhi Tết Tân Sửu", "39 câu hỏi cho người trẻ" (Phan Đăng), "Chuyện kể về 10 cô gái Ngã ba Đồng Lộc (lời: Hoài Lộc, tranh: Cloud Pillow Studio)...
      Trong đó, "Chang hoang dã - Gấu" ghi dấu ấn khi đoạt giải A Sách Quốc gia hồi tháng 11 và bán bản quyền cho NXB Anh - Pan Macmillan. The Bookseller thông báo Pan Macmillan sở hữu bản quyền toàn cầu (trừ tiếng Việt), đồng thời bán bản quyền cho năm nước: Mỹ, Hàn Quốc, Trung Quốc, Na Uy và Thổ Nhĩ Kỳ.
      Tìm mình trong thế giới hậu tuổi thơ được tác giả Đặng Hoàng Giang viết dưới dạng tường thuật phi hư cấu. Tác phẩm xoay quanh những câu chuyện, tâm tư của những chàng trai, cô gái hậu tuổi thơ - những người không còn là trẻ nhỏ, nhưng cũng chưa đủ trưởng thành. Có người bị kiềm kẹp từ nhỏ, không thể sống theo ý mình. Có người muốn được nâng đỡ nhưng bất đắc dĩ phải làm chỗ dựa cho cha, mẹ... Từ đó, tác giả đưa ra những phân tích, lý giải cảm xúc của các nhân vật dưới góc độ tâm lý học. Đại diện Nhà xuất bản Nhã Nam cho biết tác phẩm không chỉ được độc giả trẻ yêu thích, nhiều bậc phụ huynh tìm đọc với mong muốn thấu hiểu con cái. Ảnh: Nhã Nam
      
      "Tìm mình trong thế giới hậu tuổi thơ" được tác giả Đặng Hoàng Giang viết dưới dạng tường thuật phi hư cấu. Tác phẩm xoay quanh câu chuyện, tâm tư của những chàng trai, cô gái "hậu tuổi thơ" - những người không còn là trẻ nhỏ, nhưng cũng chưa đủ trưởng thành. Có người bị kìm kẹp từ nhỏ, không thể sống theo ý mình. Có người muốn được nâng đỡ nhưng bất đắc dĩ phải làm chỗ dựa cho cha, mẹ... Từ đó, tác giả đưa ra những phân tích, lý giải cảm xúc của các nhân vật dưới góc độ tâm lý học.
      Đại diện Nhã Nam cho biết tác phẩm không chỉ được độc giả trẻ yêu thích, nhiều bậc phụ huynh tìm đọc với mong muốn thấu hiểu con cái.
      Kiếp nào ta cũng tìm thấy nhau của tác giả Brian Weiss - bác sĩ tâm thần học người Mỹ. Tác phẩm kể về hai bệnh nhân Elizabeth và Pedro rơi vào tuyệt vọng vì mất người thân. Dù hẹn hò, gặp gỡ ai họ cũng cảm thấy đó không phải người dành cho mình. Brian Weiss hồi quy tiền kiếp, tháo gỡ những khúc mắc trong họ. Họ có mối quan hệ đặc biệt ở nhiều kiếp trước nhưng kiếp này, họ chưa quen nhau. Bác sĩ đắn đo giữa nguyên tắc nghề nghiệp và việc muốn vun đắp, giúp họ nhận ra nhau. Tác giả lý giải mọi chuyện bằng khoa học, y học, đồng thời lồng ghé những quan niệm về nhân quả, duyên phận đời người. Ảnh: Thái Hà books.
      
      "Kiếp nào ta cũng tìm thấy nhau" của tác giả Brian Weiss - bác sĩ tâm thần học người Mỹ. Tác phẩm kể về hai bệnh nhân Elizabeth và Pedro rơi vào tuyệt vọng vì mất người thân. Dù hẹn hò, gặp gỡ ai họ cũng cảm thấy đó không phải người dành cho mình. Brian Weiss hồi quy tiền kiếp, tháo gỡ những khúc mắc trong họ. Cả hai có mối quan hệ ở nhiều kiếp trước nhưng kiếp này, họ chưa quen nhau. Bác sĩ đắn đo giữa nguyên tắc nghề nghiệp và việc muốn vun đắp, giúp họ nhận ra nhau. Tác giả lý giải tình tiết bằng khoa học, y học, đồng thời lồng ghép những quan niệm về nhân quả, duyên phận đời người.
      Được học - tự truyện của Tara Westover - do Nhà xuất bản Phụ nữ phát hành. Tác phẩm kể về hành trình của Tara Westover - từ cô bé không được đi học đến tiến sĩ tại Đại học Cambridge. Bố mẹ Tara tin vào việc thế giới sắp diệt vong, vì vậy, cô và các anh chị em không được làm giấy khai sinh, đi học hay tiêm chủng. Tất cả những gì cô được dạy là kinh thánh. Năm 11 tuổi, Tara thoát khỏi gia đình bằng cách xin đi làm thêm. Cô được tiếp xúc với người ngoại đạo và dần tìm đến con đường học vấn. Cô dần vượt qua những lo sợ mà cha mẹ nhồi vào đầu óc, giải phóng tinh thần và trở nên ưu tú hơn. Tác phẩm từng được tỷ phú Bill Gates cho là một trong những cuốn sách hay nhất năm 2018, được mua bản quyền và dịch ra hơn 30 ngôn ngữ. Ảnh: NXB Phụ nữ
      
      Trong danh sách tác phẩm bán chạy của NXB Phụ Nữ có cuốn "Được học" - tự truyện của Tara Westover. Tác phẩm kể về hành trình của Tara Westover - từ cô bé không được tới trường đến tiến sĩ tại Đại học Cambridge. Bố mẹ Tara tin vào việc thế giới sắp diệt vong, vì vậy, cô và các anh chị em không được làm giấy khai sinh, đi học hay tiêm chủng. Những gì cô được dạy là kinh thánh. Năm 11 tuổi, Tara thoát khỏi gia đình bằng cách xin đi làm thêm. Cô được tiếp xúc với người ngoại đạo và dần tìm đến con đường học vấn. Cô cũng vượt qua những lo sợ mà cha mẹ từng gieo vào đầu, giải phóng tinh thần và trở nên ưu tú hơn. Tác phẩm từng được tỷ phú Bill Gates cho là một trong những cuốn sách hay nhất năm 2018, được mua bản quyền và dịch ra hơn 30 ngôn ngữ.
      Đại diện nhà xuất bản cho biết danh sách best-seller của họ còn có bộ sách rèn luyện phẩm chất cho trẻ em "30 ngày thực hành lòng biết ơn" với 70.000 bản, cuốn hồi ức "Châu Phi nghìn trùng" (tác giả: Isak Dinesen, dịch giả: Hà Thế Giang), "Nước Đức từ A đến Z (Lê Quang), "Hạnh phúc với cuộc sống thường ngày" (tác giả: Mayumi Arikawa, dịch giả: Nguyễn Quốc Vương)...
      Nếu biết trăm năm là hữu hạn, ấn bản đặc biệt dịp tái bản lần thứ 20. Sách được in khổ lớn, bìa cứng và có minh họa màu do Trần Quốc Anh thực hiện. Tác phẩm của Phạm Lữ Ân gồm 40 truyện ngắn về nhiều khía cạnh trong đời sống: những ưu tư, vấp ngã, tình yêu và những ước mơ, hoài bão của tuổi trưởng thành. Từ đó, tìm sự đồng cảm, xoa dịu, truyền cảm hứng và lan tỏa tinh thần tích cực tới mọi người. Xuất bản lần đầu năm 2012, tác phẩm nhiều lần vào danh sách bán chạy và được tái bản. Nhiều trích đoạn trong sách được đưa vào đề thi môn Văn THPT, học sinh giỏi... Ảnh: Phương Nam
      
      "Nếu biết trăm năm là hữu hạn", ấn bản dịp tái bản lần thứ 20 do Phương Nam phát hành.
      Sách được in khổ lớn, bìa cứng và có minh họa màu do Trần Quốc Anh thực hiện. Tác phẩm của Phạm Lữ Ân gồm 40 truyện ngắn về nhiều khía cạnh trong đời sống: những ưu tư, vấp ngã, tình yêu và những ước mơ, hoài bão của tuổi trưởng thành. Từ đó, tìm sự đồng cảm, xoa dịu, truyền cảm hứng và lan tỏa tinh thần tích cực tới mọi người. Xuất bản lần đầu năm 2012, tác phẩm nhiều lần vào danh sách bán chạy và được tái bản. Nhiều trích đoạn trong sách được đưa vào đề thi môn Văn THPT, học sinh giỏi...
      
      Top 10 sách bán chạy của Phương Nam còn có tác phẩm văn học thiếu nhi "Người trồng rừng" bìa cứng, sách màu (Jean Giono). Các tác phẩm về kỹ năng sống, Phật giáo, tâm lý - giáo dục chiếm phần lớn như: "Thay đổi tí hon - Hiệu quả bất ngờ", "Không giới hạn - Khám phá Ho'Oponopono", "Giận", "Đường xưa mây trắng - Theo gót chân Bụt"...
      Tô bình yên, vẽ hạnh phúc của Kulzsc (do Skybooks, Nhà xuất bản Phụ nữ Việt Nam phát hành), là tản văn kết hợp tô màu. Nội dung là những câu chuyện, cảm xúc của chính tác giả, gửi gắm thông điệp về gạt bỏ muộn phiền đi tìm hạnh phúc. Ngoài nội dung, sách còn gồm nhiều tranh do Kulzsc vẽ, xoay quanh khoảnh khắc đời thường trong cuộc sống như đọc sách, nuôi thú cưng, cơm mẹ nấu... Độc giả có thể tô màu vào từng bức theo ý thích của mỗi người, giúp giải trí, thư giãn. Ảnh: Skybooks
      
      "Tô bình yên, vẽ hạnh phúc" của Kulzsc (Skybooks phát hành), là tản văn kết hợp tô màu. Nội dung tác phẩm là những câu chuyện, cảm xúc của chính tác giả, gửi gắm thông điệp về gạt bỏ muộn phiền đi tìm hạnh phúc. Ngoài ra, sách gồm nhiều tranh do Kulzsc vẽ, xoay quanh khoảnh khắc đời thường trong cuộc sống như đọc sách, nuôi thú cưng, cơm mẹ nấu...
      Độc giả có thể tô màu vào từng bức theo ý thích của mỗi người, giúp giải trí, thư giãn. Đại diện mảng sách của Lazada cho biết "Tô bình yên vẽ hạnh phúc" là tác phẩm được đặt mua nhiều trên nền tảng năm qua, chỉ sau một vài cuốn sách giáo khoa, tham khảo. "Điều này cho thấy trong thời gian dịch bệnh, giãn cách kéo dài, ngoài sách phục vụ học tập ở trường lớp, độc giả tìm đến những tác phẩm mang tinh chất giải trí, chữa lành", người đại diện nói.
      `,
    },
    {
      imageSrc: "/blog-3.png",
      title: "Hôm nay đọc gì? - Số 08",
      date: "27/10/2023",
      content: `"Cây cam ngọt của tôi", "Sapiens - Lược sử loài người", "Muôn kiếp nhân sinh"... nằm trong top ấn phẩm bán chạy của các đơn vị sách năm qua.
      Sapiens: lược sử loài người của Yuval Noah Harari (Nguyễn Thủy Chung dịch, Võ Minh Tuấn hiệu đính), kể về lịch sử loài người gồm bốn giai đoạn: cách mạng nhận thức, cách mạng nông nghiệp và sự thống nhất của loài người đến cách mạng khoa học. Trong đó, Harari nhiều lần cảnh báo về sự tiến hóa quá nhanh của con người so với quy luật tự nhiên và hậu quả là có nhiều thảm họa xảy ra. Tác phẩm xuất bản lần đầu tại Israel năm 2011, đến nay được dịch ra 65 ngôn ngữ, thu hút khoảng 20 triệu độc giả, được các nhà phê bình đánh giá cao. Tỷ phú Bill Gates từng khen ngợi Harari kể về lịch sử loài người theo cách dễ hiểu nhất. Đại diện nhà phát hành Omega+ cho biết cuốn sách luôn nằm trong top tác phẩm bán chạy nhất năm của đơn vị, kể từ khi phát hành tại Việt Nam năm 2017. Ảnh: Omega+
      
      Dịch bệnh gây ảnh hưởng lớn đến hoạt động xuất bản, phát hành sách năm 2021. Tuy nhiên, nhiều tác phẩm được công chúng đón nhận. Một số nhà xuất bản, công ty phát hành chọn danh sách bán chạy của họ, dựa trên số liệu phát hành riêng của đơn vị.
      "Sapiens: lược sử loài người" của Yuval Noah Harari (Nguyễn Thủy Chung dịch, Võ Minh Tuấn hiệu đính), luôn nằm trong top tác phẩm best-seller của Omega +, kể từ khi phát hành tại Việt Nam năm 2017 đến nay với khoàng 120.000 bản, riêng 2021 là gần 10.000 bản. Sách kể về lịch sử loài người gồm bốn giai đoạn: cách mạng nhận thức, cách mạng nông nghiệp và sự thống nhất của loài người đến cách mạng khoa học. Trong đó, Harari nhiều lần cảnh báo về sự tiến hóa quá nhanh của con người so với quy luật tự nhiên và hậu quả là có nhiều thảm họa xảy ra.
      Tác phẩm xuất bản lần đầu tại Israel năm 2011, đến nay được dịch ra 65 ngôn ngữ, thu hút khoảng 20 triệu độc giả, được các nhà phê bình đánh giá cao. Tỷ phú Bill Gates từng khen ngợi Harari kể về lịch sử loài người theo cách dễ hiểu nhất.
      Muôn kiếp nhân sinh do Nguyên Phong viết, kể về trải nghiệm tiền kiếp của doanh nhân tài chính Thomas. Ông mơ thấy các kiếp của mình sau khi được người đàn ông gốc Ấn - Kris - chỉ dẫn. Việc nhớ lại tiền kiếp đòi hỏi tu tập công phu nghiêm túc, và Thomas trong kiếp cũ rèn luyện để bản thân ở hiện tại có khả năng tìm về quá khứ. Tác phẩm thể hiện các quan điểm nhân sinh và khơi gợi định nghĩa về thực thể - vật chất. Cuộc đời là các vòng xoáy. Mỗi vòng gồm bốn giai đoạn: thành, trụ, hoại, diệt (hình thành, phát triển, lụi tàn, biến mất). Tương lai ra sao còn tùy vào thái độ ứng xử của mỗi người. Theo ông Nguyễn Văn Phước - giám đốc công ty First News, Trí Việt, sách bán được 100.219 bản trong năm qua. Ảnh: First News
      
      "Muôn kiếp nhân sinh" do Nguyên Phong viết, kể về trải nghiệm tiền kiếp của doanh nhân tài chính Thomas. Ông mơ thấy các kiếp của mình sau khi được người đàn ông gốc Ấn - Kris - chỉ dẫn. Việc nhớ lại tiền kiếp đòi hỏi tu tập công phu nghiêm túc và Thomas trong kiếp cũ rèn luyện để bản thân ở hiện tại có khả năng tìm về quá khứ.
      Tác phẩm thể hiện các quan điểm nhân sinh và khơi gợi định nghĩa về thực thể - vật chất. Cuộc đời là các vòng xoáy. Mỗi vòng gồm bốn giai đoạn: thành, trụ, hoại, diệt (hình thành, phát triển, lụi tàn, biến mất). Tương lai ra sao còn tùy vào thái độ ứng xử của mỗi người. Theo ông Nguyễn Văn Phước - giám đốc công ty First News - Trí Việt, sách bán được 100.219 bản trong năm 2021.
      Cây cam ngọt của tôi (Nguyễn Bích Lan - Tô Yến Ly dịch, Nhã Nam và Nhà xuất bản Hội Nhà Văn), kể về tuổi thơ cậu bé Zezé trong khu xóm nghèo ở thủ đô Rio de Janeiro. Zezé đặt tên cho cây cam trong vườn là Minguinho và xem nó là bạn thân. Cậu tưởng tượng ra khung cảnh cả hai trò chuyện, vui chơi, cùng nhau bước qua tuổi thơ khốn khó nhưng không tuyệt vọng. Tiểu thuyết xuất bản lần đầu năm 1968 ở Brazil, là tác phẩm thành công nhất của nhà văn José Mauro de Vasconcelos (1920 - 1984). Sách được đưa vào chương trình tiểu học của Brazil, chuyển thể thành phim điện ảnh và được hơn 20 quốc gia mua bản quyền. Ảnh: Nhã Nam
      
      "Cây cam ngọt của tôi" (Nguyễn Bích Lan - Tô Yến Ly dịch) đứng đầu danh sách top 10 tác phẩm văn học bán chạy của Nhã Nam. Đại diện nhà phát hành Tiki cho biết ấn phẩm này được đặt mua nhiều nhất trên sàn năm qua.
      Tác phẩm kể về tuổi thơ cậu bé Zezé trong khu xóm nghèo ở thủ đô Rio de Janeiro. Zezé đặt tên cho cây cam trong vườn là Minguinho và xem nó là bạn thân. Cậu tưởng tượng khung cảnh cả hai trò chuyện, vui chơi, cùng nhau bước qua tuổi thơ khốn khó nhưng không tuyệt vọng.
      Tiểu thuyết xuất bản lần đầu năm 1968 ở Brazil, là tác phẩm thành công nhất của nhà văn José Mauro de Vasconcelos (1920 - 1984). Sách được đưa vào chương trình tiểu học của Brazil, chuyển thể thành phim điện ảnh và được hơn 20 quốc gia mua bản quyền.
      Ngoài ra, danh sách tác phẩm được đông đảo độc giả chọn năm qua của Nhã Nam còn có: "Đại dương đen" (Đặng Hoàng Giang), "21 bài học cho thế kỷ 21" (Yuval Noah Harari), "How psychology works - Hiểu hết về tâm lý học" (DK), "Xứ cát" (Frank Herbert)...
      Chuyện nhỏ Sài Gòn bao nhớ là tác phẩm bán chạy nhất của Nhà xuất bản Trẻ năm qua. Qua góc nhìn của tác giả Đàm Hà Phú - một chàng trai ở tỉnh lên thành phố làm việc, Sài Gòn hiện lên sống động với những con hẻm đông đúc, nhộn nhịp, món ăn quen thuộc, những mảnh đời mưu sinh vất vả và những tấm lòng nồng hậu, phóng khoáng. Trên mạng xã hội, nhiều độc giả nói xúc động khi đọc tác phẩm, đặc biệt là trong thời gian Sài Gòn giãn cách vì dịch. Ảnh: NXB Trẻ
      
      "Chuyện nhỏ Sài Gòn bao nhớ" của Nhà xuất bản Trẻ là một trong những tác phẩm bán chạy năm qua. Qua góc nhìn của tác giả Đàm Hà Phú - chàng trai ở tỉnh lên thành phố học tập, làm việc, Sài Gòn hiện lên sống động với những con hẻm đông đúc, nhộn nhịp, món ăn quen thuộc, những mảnh đời mưu sinh vất vả và tấm lòng nồng hậu, phóng khoáng. Trên mạng xã hội, nhiều độc giả nói xúc động khi đọc tác phẩm trong thời gian Sài Gòn giãn cách, chịu nhiều mất mát vì dịch.
      Trong danh sách bán chạy của Nhà xuất bản Trẻ có bộ ấn phẩm minh họa màu: "Cho tôi xin một vé đi tuổi thơ", "Tôi là Bê Tô" của Nguyễn Nhật Ánh, "Vừa nhắm mắt vừa mở cửa sổ" của Nguyễn Ngọc Thuần, "Cánh đồng bất tận" của Nguyễn Ngọc Tư. Ngoài ra còn có, "Đà Lạt những cuộc gặp gỡ" (Nguyễn Vĩnh Nguyên), "Sài Gòn những mảnh ghép rời ký ức" (Lê Văn Nghĩa), "Tôi tự học" bản đặc biệt (Thu giang Nguyễn Duy Cần)...
      Những tù nhân của địa lý - Khám phá sự vận hành của thế giới qua những tấm bản đồ của Tim Marshall, Nguyễn Xuân Hồng dịch là tác phẩm bán chạy nhất của nhà xuất bản Kim Đồng năm qua. Từ góc nhìn địa lý, sách lý giải quá trình hình thành, lịch sử và đặc thù của các vùng đất khác nhau trên thế giới. Tác phẩm giản lược nội dung, kết hợp tranh minh họa nhằm phù hợp độc giả trẻ. Ảnh: Kim Đồng.
      
      "Những tù nhân của địa lý - Khám phá sự vận hành của thế giới qua những tấm bản đồ" của Tim Marshall, Nguyễn Xuân Hồng dịch là tác phẩm bán chạy nhất của Nhà xuất bản Kim Đồng. Từ góc nhìn địa lý, sách lý giải quá trình hình thành, lịch sử và đặc thù của các vùng đất khác nhau trên thế giới. Tác phẩm giản lược nội dung, kết hợp tranh minh họa nhằm phù hợp độc giả trẻ.
      Top 10 tác phẩm của Kim Đồng còn có "Chang hoang dã - Gấu" (tác giả Trang Nguyễn, Nhà xuất bản Kim Đồng phát hành), "Nhâm nhi Tết Tân Sửu", "39 câu hỏi cho người trẻ" (Phan Đăng), "Chuyện kể về 10 cô gái Ngã ba Đồng Lộc (lời: Hoài Lộc, tranh: Cloud Pillow Studio)...
      Trong đó, "Chang hoang dã - Gấu" ghi dấu ấn khi đoạt giải A Sách Quốc gia hồi tháng 11 và bán bản quyền cho NXB Anh - Pan Macmillan. The Bookseller thông báo Pan Macmillan sở hữu bản quyền toàn cầu (trừ tiếng Việt), đồng thời bán bản quyền cho năm nước: Mỹ, Hàn Quốc, Trung Quốc, Na Uy và Thổ Nhĩ Kỳ.
      Tìm mình trong thế giới hậu tuổi thơ được tác giả Đặng Hoàng Giang viết dưới dạng tường thuật phi hư cấu. Tác phẩm xoay quanh những câu chuyện, tâm tư của những chàng trai, cô gái hậu tuổi thơ - những người không còn là trẻ nhỏ, nhưng cũng chưa đủ trưởng thành. Có người bị kiềm kẹp từ nhỏ, không thể sống theo ý mình. Có người muốn được nâng đỡ nhưng bất đắc dĩ phải làm chỗ dựa cho cha, mẹ... Từ đó, tác giả đưa ra những phân tích, lý giải cảm xúc của các nhân vật dưới góc độ tâm lý học. Đại diện Nhà xuất bản Nhã Nam cho biết tác phẩm không chỉ được độc giả trẻ yêu thích, nhiều bậc phụ huynh tìm đọc với mong muốn thấu hiểu con cái. Ảnh: Nhã Nam
      
      "Tìm mình trong thế giới hậu tuổi thơ" được tác giả Đặng Hoàng Giang viết dưới dạng tường thuật phi hư cấu. Tác phẩm xoay quanh câu chuyện, tâm tư của những chàng trai, cô gái "hậu tuổi thơ" - những người không còn là trẻ nhỏ, nhưng cũng chưa đủ trưởng thành. Có người bị kìm kẹp từ nhỏ, không thể sống theo ý mình. Có người muốn được nâng đỡ nhưng bất đắc dĩ phải làm chỗ dựa cho cha, mẹ... Từ đó, tác giả đưa ra những phân tích, lý giải cảm xúc của các nhân vật dưới góc độ tâm lý học.
      Đại diện Nhã Nam cho biết tác phẩm không chỉ được độc giả trẻ yêu thích, nhiều bậc phụ huynh tìm đọc với mong muốn thấu hiểu con cái.
      Kiếp nào ta cũng tìm thấy nhau của tác giả Brian Weiss - bác sĩ tâm thần học người Mỹ. Tác phẩm kể về hai bệnh nhân Elizabeth và Pedro rơi vào tuyệt vọng vì mất người thân. Dù hẹn hò, gặp gỡ ai họ cũng cảm thấy đó không phải người dành cho mình. Brian Weiss hồi quy tiền kiếp, tháo gỡ những khúc mắc trong họ. Họ có mối quan hệ đặc biệt ở nhiều kiếp trước nhưng kiếp này, họ chưa quen nhau. Bác sĩ đắn đo giữa nguyên tắc nghề nghiệp và việc muốn vun đắp, giúp họ nhận ra nhau. Tác giả lý giải mọi chuyện bằng khoa học, y học, đồng thời lồng ghé những quan niệm về nhân quả, duyên phận đời người. Ảnh: Thái Hà books.
      
      "Kiếp nào ta cũng tìm thấy nhau" của tác giả Brian Weiss - bác sĩ tâm thần học người Mỹ. Tác phẩm kể về hai bệnh nhân Elizabeth và Pedro rơi vào tuyệt vọng vì mất người thân. Dù hẹn hò, gặp gỡ ai họ cũng cảm thấy đó không phải người dành cho mình. Brian Weiss hồi quy tiền kiếp, tháo gỡ những khúc mắc trong họ. Cả hai có mối quan hệ ở nhiều kiếp trước nhưng kiếp này, họ chưa quen nhau. Bác sĩ đắn đo giữa nguyên tắc nghề nghiệp và việc muốn vun đắp, giúp họ nhận ra nhau. Tác giả lý giải tình tiết bằng khoa học, y học, đồng thời lồng ghép những quan niệm về nhân quả, duyên phận đời người.
      Được học - tự truyện của Tara Westover - do Nhà xuất bản Phụ nữ phát hành. Tác phẩm kể về hành trình của Tara Westover - từ cô bé không được đi học đến tiến sĩ tại Đại học Cambridge. Bố mẹ Tara tin vào việc thế giới sắp diệt vong, vì vậy, cô và các anh chị em không được làm giấy khai sinh, đi học hay tiêm chủng. Tất cả những gì cô được dạy là kinh thánh. Năm 11 tuổi, Tara thoát khỏi gia đình bằng cách xin đi làm thêm. Cô được tiếp xúc với người ngoại đạo và dần tìm đến con đường học vấn. Cô dần vượt qua những lo sợ mà cha mẹ nhồi vào đầu óc, giải phóng tinh thần và trở nên ưu tú hơn. Tác phẩm từng được tỷ phú Bill Gates cho là một trong những cuốn sách hay nhất năm 2018, được mua bản quyền và dịch ra hơn 30 ngôn ngữ. Ảnh: NXB Phụ nữ
      
      Trong danh sách tác phẩm bán chạy của NXB Phụ Nữ có cuốn "Được học" - tự truyện của Tara Westover. Tác phẩm kể về hành trình của Tara Westover - từ cô bé không được tới trường đến tiến sĩ tại Đại học Cambridge. Bố mẹ Tara tin vào việc thế giới sắp diệt vong, vì vậy, cô và các anh chị em không được làm giấy khai sinh, đi học hay tiêm chủng. Những gì cô được dạy là kinh thánh. Năm 11 tuổi, Tara thoát khỏi gia đình bằng cách xin đi làm thêm. Cô được tiếp xúc với người ngoại đạo và dần tìm đến con đường học vấn. Cô cũng vượt qua những lo sợ mà cha mẹ từng gieo vào đầu, giải phóng tinh thần và trở nên ưu tú hơn. Tác phẩm từng được tỷ phú Bill Gates cho là một trong những cuốn sách hay nhất năm 2018, được mua bản quyền và dịch ra hơn 30 ngôn ngữ.
      Đại diện nhà xuất bản cho biết danh sách best-seller của họ còn có bộ sách rèn luyện phẩm chất cho trẻ em "30 ngày thực hành lòng biết ơn" với 70.000 bản, cuốn hồi ức "Châu Phi nghìn trùng" (tác giả: Isak Dinesen, dịch giả: Hà Thế Giang), "Nước Đức từ A đến Z (Lê Quang), "Hạnh phúc với cuộc sống thường ngày" (tác giả: Mayumi Arikawa, dịch giả: Nguyễn Quốc Vương)...
      Nếu biết trăm năm là hữu hạn, ấn bản đặc biệt dịp tái bản lần thứ 20. Sách được in khổ lớn, bìa cứng và có minh họa màu do Trần Quốc Anh thực hiện. Tác phẩm của Phạm Lữ Ân gồm 40 truyện ngắn về nhiều khía cạnh trong đời sống: những ưu tư, vấp ngã, tình yêu và những ước mơ, hoài bão của tuổi trưởng thành. Từ đó, tìm sự đồng cảm, xoa dịu, truyền cảm hứng và lan tỏa tinh thần tích cực tới mọi người. Xuất bản lần đầu năm 2012, tác phẩm nhiều lần vào danh sách bán chạy và được tái bản. Nhiều trích đoạn trong sách được đưa vào đề thi môn Văn THPT, học sinh giỏi... Ảnh: Phương Nam
      
      "Nếu biết trăm năm là hữu hạn", ấn bản dịp tái bản lần thứ 20 do Phương Nam phát hành.
      Sách được in khổ lớn, bìa cứng và có minh họa màu do Trần Quốc Anh thực hiện. Tác phẩm của Phạm Lữ Ân gồm 40 truyện ngắn về nhiều khía cạnh trong đời sống: những ưu tư, vấp ngã, tình yêu và những ước mơ, hoài bão của tuổi trưởng thành. Từ đó, tìm sự đồng cảm, xoa dịu, truyền cảm hứng và lan tỏa tinh thần tích cực tới mọi người. Xuất bản lần đầu năm 2012, tác phẩm nhiều lần vào danh sách bán chạy và được tái bản. Nhiều trích đoạn trong sách được đưa vào đề thi môn Văn THPT, học sinh giỏi...
      
      Top 10 sách bán chạy của Phương Nam còn có tác phẩm văn học thiếu nhi "Người trồng rừng" bìa cứng, sách màu (Jean Giono). Các tác phẩm về kỹ năng sống, Phật giáo, tâm lý - giáo dục chiếm phần lớn như: "Thay đổi tí hon - Hiệu quả bất ngờ", "Không giới hạn - Khám phá Ho'Oponopono", "Giận", "Đường xưa mây trắng - Theo gót chân Bụt"...
      Tô bình yên, vẽ hạnh phúc của Kulzsc (do Skybooks, Nhà xuất bản Phụ nữ Việt Nam phát hành), là tản văn kết hợp tô màu. Nội dung là những câu chuyện, cảm xúc của chính tác giả, gửi gắm thông điệp về gạt bỏ muộn phiền đi tìm hạnh phúc. Ngoài nội dung, sách còn gồm nhiều tranh do Kulzsc vẽ, xoay quanh khoảnh khắc đời thường trong cuộc sống như đọc sách, nuôi thú cưng, cơm mẹ nấu... Độc giả có thể tô màu vào từng bức theo ý thích của mỗi người, giúp giải trí, thư giãn. Ảnh: Skybooks
      
      "Tô bình yên, vẽ hạnh phúc" của Kulzsc (Skybooks phát hành), là tản văn kết hợp tô màu. Nội dung tác phẩm là những câu chuyện, cảm xúc của chính tác giả, gửi gắm thông điệp về gạt bỏ muộn phiền đi tìm hạnh phúc. Ngoài ra, sách gồm nhiều tranh do Kulzsc vẽ, xoay quanh khoảnh khắc đời thường trong cuộc sống như đọc sách, nuôi thú cưng, cơm mẹ nấu...
      Độc giả có thể tô màu vào từng bức theo ý thích của mỗi người, giúp giải trí, thư giãn. Đại diện mảng sách của Lazada cho biết "Tô bình yên vẽ hạnh phúc" là tác phẩm được đặt mua nhiều trên nền tảng năm qua, chỉ sau một vài cuốn sách giáo khoa, tham khảo. "Điều này cho thấy trong thời gian dịch bệnh, giãn cách kéo dài, ngoài sách phục vụ học tập ở trường lớp, độc giả tìm đến những tác phẩm mang tinh chất giải trí, chữa lành", người đại diện nói.
      `,
    },
    // Add more entries as needed
  ];

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-black text-2xl not-italic font-bold">
          Blog mới nhất
        </h2>
        <div
          className="flex flex-col w-full pb-2 space-y-2 sm:space-y-5"
          id="blog-content-grid"
        >
          {blogEntries.map((entry, index) => (
            <button
              key={index}
              className="flex flex-col sm:flex-row rounded-lg transition-all ease-m3-standard-accelerate text-left sm:space-x-5 max-sm:p-2"
              onClick={() => {
                navigate("/blogs/" + index);
              }}
            >
              <img
                src={entry.imageSrc}
                className="rounded-xl"
                alt={`blog-${index + 1}`}
              />
              <div className="flex flex-col space-y-5">
                <p className="font-bold text-lg">{entry.title}</p>
                <p>{entry.date}</p>
                <p className="line-clamp-5">{entry.content}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export function BlogPageCustomer() {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-6 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <div className="w-full font-bold text-3xl">Blog</div>
          <Blogs />
        </main>
      </section>
    </>
  );
}

export function BLogDetailsCustomer() {
  const navigate = useNavigate();
  const blogDetail = {
    imageSrc: "/blog-1.png",
    title: "Tuyển tập những đầu sách bạn nên đọc",
    date: "27/10/2023",
    content: `Sách là viên ngọc tri thức của nhân loại và có ảnh hưởng rất lớn tới cuộc sống con người. Nhờ đọc được những cuốn sách hay mà người ta có thể thay đổi cách sống, cải thiện tinh thần và có những định hướng đúng đắn cho sự nghiệp.
    
    Dưới đây là 10 cuốn sách hay nhất mọi thời đại đã mang lại động lực sống mạnh mẽ cho nhiều người.
    
    1. Đắc nhân tâm
    
    Đắc nhân tâm là quyển sách nổi tiếng nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Đây là quyển sách liên tục đứng đầu danh mục sách bán chạy nhất (do báo The New York Times bình chọn suốt 10 năm liền. Tác phẩm được đánh giá là quyển sách đầu tiên và hay nhất, có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới.
    
    Đắc Nhân Tâm là nghệ thuật thu phục lòng người, là làm cho tất cả mọi người yêu mến mình. Đắc nhân tâm và cái Tài trong mỗi chúng ta.
    
    Đắc Nhân Tâm trong ý nghĩa đó cần được thụ đắc bằng sự hiểu rõ bản thân, thành thật với chính mình, hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie.
    
    Từ khi “Đắc nhân tâm” đến tay độc giả, nó đã khiến người đọc nhận ra rằng họ có thể tiết chế được các mối quan hệ trong và ngoại lề công việc, và trên thực tế thì hai mối quan hệ ấy không bao giờ tách rời nhau.
    
    Câu trích hay nhất trong cuốn sách này đó là: “Có một sự thật là tất cả những người bạn gặp đều tự cảm thấy họ hơn bạn theo một cách nào đấy, và con đường thẳng dẫn tới trái tim họ là để họ nhận ra rằng bạn công nhận tầm quan trọng của họ, và sự ghi nhận đó là chân thành”.
    
    2. Cách nghĩ để thành công
    
    Cách nghĩ để thành công là cuốn sách đầu tiên đưa ra triết lý thành đạt - một triết lý đầy đủ và toàn diện về thành công của cá nhân, đồng thời cung cấp cho bạn phương pháp để tạo ra kế hoạch sơ bộ và chi tiết để đạt được thành công đó.
    
    Được viết ra từ vô số những câu chuyện có thật của những người vĩ đại như Edison - nhà phát minh lỗi lạcmà thời gian rèn luyện trong trường học chỉ... vỏn vẹn 3 tháng, như Henry Ford - người bị coi là không có học vấn nhưng đã trở thành ông trùm trong nền công nghiệp xe hơi với một gia tài kết xù..., tác phẩm có một sức thuyết phục và lay động rất lớn,. Napoleon Hill đã dành hầu như toàn bộ thời gian và công sức trong suốt gần ba mươi năm để phỏng vấn hơn 500 người nổi tiếng và thành công nhất trong nhiều lĩnh vực khác nhau, cùng hàng ngàn doanh nhân khác - cả những kẻ thất bại và những người thành công.
    
    Với hơn 60 triệu bản đã được bán trong 70 năm kể từ khi ra đời, những đúc kết về thành công của Napoleon Hill đến nay vẫn không hề bị lỗi thời, ngược lại, thời gian chính là minh chứng sống động cho tính đúng đắn của những bí quyết mà ông chia sẻ.
    
    Câu trích hay nhất của cuốn sách này đó là: “ Những đột phá cần có trong cuộc đời đang nằm trong chính trí tưởng tượng của bạn. Trí tưởng tượng là xưởng máy trong đầu bạn, có thể biến năng lượng tư duy thành thành tựu và của cải”.
    
    3. 7 thói quen của người thành đạt 
    
    Tác giả Steven Covey đã vẽ nên tấm bản đồ hướng đi cho cuộc sống và đưa nó vào trang sách để giúp người đọc không chỉ hình thành những thói quen sinh hoạt hợp lý mà còn giúp họ trở thành người tốt, sống có ích hơn.
    
    Câu trích hay nhất trong cuốn sách này là: “gieo mầm suy nghĩ sẽ gặt hái hành vi, gieo mầm hành vi sẽ gặt hái thói quen, gieo mầm thói quen sẽ gặt hái tính cách, gieo mầm tính cách sẽ gặt hái số phận”.
    
    4. Cuộc sống không giới hạn
    
    Cuộc Sống Không Giới Hạn - Nick Vujic- Câu Chuyện Diệu Kỳ Của Chàng Trai Đặc Biệt Nhất Hành Tinh“.
    "Bạn đẹp đẽ và quý giá hơn tất cả những viên kim cương trên thế gian này. Dẫu vậy, chúng ta nên luôn luôn đặt ra cho mình mục tiêu trở thành những con người tốt hơn, toàn thiện hơn, đẩy lùi và loại bỏ những giới hạn bằng cách mơ những giấc mơ lớn lao. Trong hành trình đó, chúng ta luôn cần có những điều chỉnh (bởi vì cuộc đời này không phải lúc nào cũng toàn là màu hồng), nhưng cuộc đời này luôn đáng sống. Tôi đến đây để nói với bạn rằng cho dù bạn đang ở trong hoàn cảnh nào, miễn là bạn còn thở, thì bạn vẫn có thể đóng góp cho cuộc đời này…” 
    
    5. Hành trình về Phương Đông
    
    Hành trình về phương đông” là một phần trong bộ hồi ký nổi tiếng của giáo sư Blair T. Spalding (1857 – 1953). Cuốn sách kể chuyện một đoàn khoa học gồm các chuyên môn khác nhau Hội Khoa học Hoàng gia Anh (tức Viện Hàn lâm Khoa học) cử sang Ấn Độ nghiên cứu về “huyền học”. Sau hai năm trời lang thang khắp các đền chùa Ấn Độ, chứng kiến nhiều cảnh mê tín dị đoan, thậm chí “làm tiền” du khách, của nhiều pháp sư, đạo sĩ rởm, họ được tiếp xúc với những vị chân tu sống ẩn danh ở thành phố hay trên rặng Tuyết Sơn. Nhờ thế, họ được chứng kiến, hiểu biết đúng đắn về các khoa học cổ xưa và bí truyền của văn hóa Ấn Độ như yoga, thuật chiêm tinh, các phép dưỡng sinh và chữa bệnh, quan niệm về cõi sống và cõi chết.
    
    “Mọi vật trong vũ trụ đều quân bình tuyệt đối, không dư, không thiếu, từ hạt bụi bé nhỏ đến những dãy thiên hà vĩ đại. Đời người quá ngắn, và luôn bị lôi cuốn vào sinh hoạt quay cuồng. Đâu mấy ai ý thức được sự phung phí hôm nay, dọn đường cho sự đau khổ ngày mai. Tất cả chỉ là những ảo ảnh chập chờn, thế mà người ta cứ coi như thật. Nếu biết thức tỉnh quan sát, ta có thể học hỏi biết bao điều hay. Tiếc rằng khi đắc thời người ta quên đi quá khứ rất nhanh. Chỉ trong đau khổ, nhục nhã ê chề mới chịu học. Có thể đó cũng là lý do luôn luôn có các biến động vô thường, thúc dục con người học hỏi.”
    
    6. Người giàu có nhất thành Babylon
    
    Những trang sách trong cuốn sách Người giàu có nhất thành Babylon sẽ đưa chúng ta trở lại vương quốc Babylon cổ đại, cái nôi nuôi dưỡng những nguyên lý cơ bản về tài chính mà giờ đây con người hiện đại đã kế thừa và vận dụng trên toàn thế giới. Cuốn sách nói về những thành công, những thành quả đạt được của từng cá nhân sống trong thành Babylon cổ đại. Từ đó, giúp mọi người hiểu rõ hơn về vấn đề tài chính và cống hiến các kế sách và phương pháp làm giàu. Những bí quyết này giúp bạn đánh giá đúng giá trị của đồng tiền, và hướng dẫn bạn cách thực hành theo những nguyên lý tài chính.
    
    Đối với những độc giả không làm trong môi trường kinh doanh, quyển sách sẽ đưa ra những bí quyết giúp bạn gia tăng số tiền trong tài khoản và giải quyết nhanh chóng được những khó khăn về mặt tài chính. Còn đối với doanh nhân, thì những câu chuyện kể về người thương gia giàu có sẽ trở thành những bài học kinh điển và các bạn có thể áp dụng những nguyên lý sáng giá nhất của nó để đem lại thành công trong các chiến lược kinh doanh của mình.
    
    7. Quẳng gánh lo đi mà vui sống
    
    Cuốn sách cùng bộ với Đắc nhân tâm được đánh giá là cuốn sách rất hay. Mang đến cho bạn sự tự tin, niềm vui, cách vượt lên những nỗi đau.
    
    8. Bộ sách – Hạt giống tâm hồn
    
    Bộ sách Hạt giống tâm hồn là tập hợp những câu truyện hay trong cuộc sống. Những câu truyện thành đạt, những câu truyện về tấm lòng cao đẹp. Nuôi dưỡng một tâm hồn trong sáng, cho bạn một cuộc sống luôn vui tươi với những hạnh phúc giản dị.
    
    9. Tốc độ của niềm tin
    
    Như những sóng gợn trong hồ nước, Tốc độ của Niềm tin bắt đầu từ bên trong mỗi con người chúng ta, rồi lan sang các mối quan hệ của chúng ta, các tổ chức nơi chúng ta hoạt động, các mối quan hệ trên thương trường và cuối cùng tỏa ra khắp nơi trên thế giới. Covey trình bày bản đồ hành trình để xây dựng niềm tin ở mọi cấp độ, xây dựng tính cách và năng lực, nâng cao mức độ tin cậy và thiết lập sự lãnh đạo truyền cảm hứng cho mọi người.
    
    10. Thói quen thứ 8
    Thói quen thứ 8 - Một giải pháp mới dành cho lãnh đạo trong thời đại kinh tế tri thức và cho những ai đang tìm cách định vị bản thân. Trong cuốn The 7 Habits of Highly Effective People, Covey đã chỉ cách làm cho ta trở nên đắc lực, làm việc có hiệu quả. Tuy nhiên, so với hoàn cảnh lúc quyển sách ra đời, thế giới ngày nay đã khác, nhiều thách thức hơn và cũng phức tạp hơn. Covey đã bỏ ra năm năm nghiên cứu, soạn thảo, thử nghiệm để cuối cùng trình làng cuốn Thói quen thứ 8 cho thời kỳ mà Covey mệnh danh là Thời đại của người lao động tri thức (the Knowledge Worker Age). `,
  };
  return (
    <>
      <Navbar mode="login" />
      <section className="mx-auto px-6 md:px-10 py-10 space-y-5 flex flex-col max-w-screen-xl pt-20">
        <main className="my-5 space-y-5">
          <Button
            theme={customTheme}
            pill
            color="secondary"
            withIcon
            onClick={() => {
              navigate("/blogs");
            }}
          >
            <HiOutlineArrowLeft className="h-5 w-5 mr-3" />
            Quay lại
          </Button>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col space-y-3">
              <p className="text-2xl font-bold">{blogDetail.title}</p>
              <p className="pb-5">{blogDetail.date}</p>
              <img
                src={blogDetail.imageSrc}
                alt="blog cover"
                className="w-full"
              ></img>
              <div className="whitespace-pre-line">{blogDetail.content}</div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
