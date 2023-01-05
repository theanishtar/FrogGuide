<template><div><h1 id="cai-đat-muc-luc" tabindex="-1"><a class="header-anchor" href="#cai-đat-muc-luc" aria-hidden="true">#</a> Cài đặt---------------------------------------<a href="https://github.com/Zenfection/Java" target="_blank" rel="noopener noreferrer">Mục lục<ExternalLinkIcon/></a></h1>
<h2 id="cai-đat-jdk" tabindex="-1"><a class="header-anchor" href="#cai-đat-jdk" aria-hidden="true">#</a> Cài đặt JDK <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-23-26-icons8-java.png" alt="icons8-java.png"></h2>
<p>Để cài đặt Java, tôi sẽ hướng dẫn bạn cách thức dễ nhất, hãy truy cập link <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank" rel="noopener noreferrer">sau đây<ExternalLinkIcon/></a></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-12-00-Ảnh chụp Màn hình 2021-01-29 lúc 09.11.29.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.11.29.png"></p>
<blockquote>
<p>🦈 Như bạn đã thấy đây là trang chủ <code v-pre>Oracle</code>, bạn có thể thấy Java SE 15 là phiên bản mới nhất, hãy nhấn <code v-pre>JDK Download</code> và tải nó về</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-12-53-Ảnh chụp Màn hình 2021-01-29 lúc 09.12.45.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.12.45.png"></p>
<p>🐍 Bạn hãy download file dựa trên hệ điều hành bạn đang xài :</p>
<ul>
<li><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-15-30-icons8-windows8.png" alt="icons8-windows8.png"> <strong>Window</strong> : Cài file có đuôi <code v-pre>.exe</code></li>
<li><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-15-18-icons8-linux.png" alt="icons8-linux.png"> <strong>Linux</strong>  : Cài file có đuôi <code v-pre>.deb</code> nếu thuộc nhánh <code v-pre>Debian</code>, cài đuôi <code v-pre>.rpm</code> nếu thuộc nhánh <code v-pre>RedHat</code></li>
<li><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-15-36-icons8-mac_os_logo.png" alt="icons8-mac_os_logo.png"> <strong>MacOS</strong> : Cài file có đuôi <code v-pre>.dmg</code></li>
</ul>
</blockquote>
<p>Để kiểm tra cài đặt thành công, bạn hãy mở :</p>
<ul>
<li>Mở <strong>CMD</strong>  nếu bạn xài <strong>Window</strong></li>
<li>Mở <strong>Terminal</strong> nếu bạn sử dụng <strong>Linux</strong> hoặc <strong>MacOS</strong></li>
</ul>
<p>Và hãy gõ :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-20-59-Ảnh chụp Màn hình 2021-01-29 lúc 09.18.33.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.18.33.png"></p>
<blockquote>
<p>🔥 Nó hiện ra phiên bản <code v-pre>15.0.2</code> (<em>có thể phiên bản khác</em>) như trên thì bạn đã thành công rồi đấy.</p>
</blockquote>
<hr>
<h2 id="cai-đat-cong-cu-lap-trinh" tabindex="-1"><a class="header-anchor" href="#cai-đat-cong-cu-lap-trinh" aria-hidden="true">#</a> Cài đặt Công cụ lập trình <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-24-24-Microsoft_Visual_Studio_Code.png" alt="Microsoft_Visual_Studio_Code.png"></h2>
<p>Nếu bạn muốn xài một <code v-pre>IDE</code> thì hãy sử dụng <a href="https://www.eclipse.org/downloads/" target="_blank" rel="noopener noreferrer">Eclipse<ExternalLinkIcon/></a>, nhưng ở đây chúng tôi không dùng thế, mà chúng tôi sử dụng <code v-pre>Vscode</code></p>
<p>Bạn hãy học cách setup cho Vscode <a href="https://zenfection.github.io/Source/Vscode/" target="_blank" rel="noopener noreferrer">tại đây<ExternalLinkIcon/></a>, và nhớ chỉ cài <code v-pre>Java</code></p>
<blockquote>
<p>Bạn chỉ cần đảm với với mình rằng : <code v-pre>JDK</code> bên trên đã cài thành công và <code v-pre>Java Extension Pack</code> đã cài đặt như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-39-44-Ảnh chụp Màn hình 2021-01-29 lúc 09.38.55.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.38.55.png"></p>
</blockquote>
<p>Hãy đến với bài code <code v-pre>Java</code> đầu tiên nào :</p>
<ul>
<li>
<p><strong>B1</strong> : Hãy tạo thư mục đại nào đó, ví dụ tên <strong>Java</strong></p>
</li>
<li>
<p><strong>B2</strong> : Quăng thư mục đó vào <code v-pre>Vscode</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-41-56-Ảnh chụp Màn hình 2021-01-29 lúc 09.41.48.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.41.48.png"></p>
</li>
<li>
<p><strong>B3</strong> : Hãy nhấn <code v-pre>Ctrl + Shift + P</code> và gõ <em>Java Create Project</em> và làm như sau :
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-45-51-2021-01-29 09.43.09.gif" alt="2021-01-29 09.43.09.gif"></p>
</li>
<li>
<p><strong>B4</strong> : Mở file <code v-pre>.java</code> trong <code v-pre>src</code> và bạn đã thấy dòng code đầu tiên :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-48-31-Ảnh chụp Màn hình 2021-01-29 lúc 09.47.56.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.47.56.png"></p>
</li>
</ul>
<p>Để chạy chương trình (<strong>Run</strong>) Java, bạn có thể chọn 3 chỗ sau đây :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-51-49-Ảnh chụp Màn hình 2021-01-29 lúc 09.49.32.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 09.49.32.png"></p>
<hr>
<h2 id="debug-trong-java" tabindex="-1"><a class="header-anchor" href="#debug-trong-java" aria-hidden="true">#</a> Debug trong Java <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-09-53-43-icons8-bug.png" alt="icons8-bug.png"></h2>
<p>Đến với Guide của mình, nói <strong>KHÔNG</strong> với <strong>code mù</strong>, chúng ta phải làm chủ code chứ không để code làm khó ta, nếu các bạn cứ viết mù rồi run xong sửa tới chừng nào nó chạy thì sai lầm, đó chỉ là những lỗi cú pháp cơ bản, sau này gặp những vấn đề lớn không biết code giải quyết.</p>
<blockquote>
<p>🤔 Vậy <code v-pre>Debug</code> là gì ? Có ăn được không mà cần dữ thế ?</p>
</blockquote>
<p>Hiểu đơn giản thế này, <code v-pre>De</code> là Definition, <code v-pre>Bug</code> là nghĩa là bọ cũng nghĩa là lỗi.</p>
<blockquote>
<p>🤔 Tại sao <code v-pre>Bug</code> là con bọ mà nghĩa là lỗi ?</p>
<p>==&gt; Đúng như bạn nghĩ vào những đời đầu của máy tính, khi hoạt động có 1 con bọ đã lọt vào trong bộ máy và làm hoạt động sai, nên từ đó <code v-pre>Bug</code> là lỗi.</p>
</blockquote>
<p>Các bước <code v-pre>Debug</code> như sau :</p>
<ul>
<li>
<p><strong>B1</strong> : Chuyển qua Tab <code v-pre>Debug</code> và đặt <code v-pre>Breakpoint</code> tại dòng bạn muốn dừng như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-04-27-2021-01-29 10.03.30.gif" alt="2021-01-29 10.03.30.gif"></p>
<blockquote>
<p>Mình đặt <code v-pre>Breakpoint</code> tại dòng <strong>3</strong></p>
</blockquote>
</li>
<li>
<p><strong>B2</strong> : Nhấn vào<code v-pre>Debug</code> trong các cách sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-07-10-Bản sao Ảnh chụp Màn hình 2021-01-29 lúc 10.05.28.png" alt="Bản sao Ảnh chụp Màn hình 2021-01-29 lúc 10.05.28.png"></p>
</li>
</ul>
<p>Như vậy bạn đã có thể sử dụng <code v-pre>Debug</code> , hãy xem dưới đây :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-12-57-Ảnh chụp Màn hình 2021-01-29 lúc 10.09.12.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 10.09.12.png"></p>
<blockquote>
<p>💡 Như các bạn có thể thấy :</p>
<ul>
<li><code v-pre>Continue</code> : tiếp tục chạy chương trình bình thường</li>
<li><code v-pre>Step Over</code> : chạy qua hàm</li>
<li><code v-pre>Step Into</code> : chạy vào hàm</li>
<li><code v-pre>Reload</code> : load lại <code v-pre>Debug</code></li>
<li><code v-pre>Stop</code> : Dừng <code v-pre>Debug</code></li>
</ul>
<p>===&gt; Bạn chỉ cần nhớ <code v-pre>Step Over</code> và <code v-pre>Step Into</code>. Bạn hãy thử nhiều lần rồi bạn sẽ hiểu.</p>
<p>Góc bên trái là những giá trị của bạn, khi bạn chạy qua một lệnh nào đó, nó sẽ thay đổi và bạn hãy theo dõi ở đó.</p>
</blockquote>
<p><strong>Bonus:</strong></p>
<p>Cài thêm Extension <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-19-13-Microsoft.VisualStudio.Services.Icons - 01.png" alt="Microsoft.VisualStudio.Services.Icons - 01.png"> <a href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode" target="_blank" rel="noopener noreferrer">SonarLint<ExternalLinkIcon/></a> để nhắc code sai ngay khi bạn gõ nhe !!!</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/01/29-10-19-43-Ảnh chụp Màn hình 2021-01-29 lúc 10.19.37.png" alt="Ảnh chụp Màn hình 2021-01-29 lúc 10.19.37.png"></p>
<table>
<thead>
<tr>
<th>🔙  <a href="https://github.com/Zenfection/Java/blob/master/Java%20OOP/1.OOP.md" target="_blank" rel="noopener noreferrer">Bài 1.Java OOP<ExternalLinkIcon/></a></th>
<th><a href="https://github.com/Zenfection/Java/blob/master/Java%20Basic/3.Cuphap.md" target="_blank" rel="noopener noreferrer">Bài 3.Cú pháp<ExternalLinkIcon/></a> 🔜</th>
</tr>
</thead>
</table>
</div></template>


