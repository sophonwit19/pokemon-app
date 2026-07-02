# 🎮 Pokémon World App (Pokédex)

เว็บแอปพลิเคชันสารานุกรมโปเกมอน (Pokédex) ที่ดึงข้อมูลแบบ Real-time มาแสดงผลในรูปแบบการ์ดที่สวยงาม ค้นหาง่าย และสลับหน้าดูข้อมูลได้อย่างลื่นไหล รองรับการแสดงผลสมบูรณ์แบบบนทุกอุปกรณ์

> 🌐 **Live Demo:** [https://pokemon-app-two-gamma.vercel.app/](https://pokemon-app-two-gamma.vercel.app/)
> 📁 **GitHub Repository:** [https://github.com/sophonwit19/pokemon-app.git](https://github.com/sophonwit19/pokemon-app.git)

---

## 🧑‍💻 ข้อมูลผู้พัฒนา (Developer Information)

* **ผู้พัฒนา:** นายโสภณวิชญ์ แก้วศิลา (Sophonwit Kaewsila)
* **รหัสนักศึกษา:** 673450209-9
* **รายวิชา:** Front-end Web Programming
* **สาขาวิชา:** วิทยาการคอมพิวเตอร์และสารสนเทศ (Computer and Information Science - CIS)
* **คณะ:** คณะสหวิทยาการ
* **มหาวิทยาลัย:** มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย (Khon Kaen University)

---

## 📝 รายละเอียดโปรเจกต์ (Project Description)

โปรเจกต์นี้จัดทำขึ้นเพื่อเรียนรู้และฝึกฝนการพัฒนาเว็บแอปพลิเคชันฝั่งหน้าบ้าน (Front-end Web Programming) ยุคใหม่ โดยนำข้อมูลสดแบบ Real-time จาก PokeAPI มาประมวลผลและนำเสนอผ่านหน้าต่าง Interface ที่เป็นมิตรกับผู้ใช้งาน (User-Friendly UI) จัดเต็มด้วยระบบการค้นหา คัดกรองข้อมูล และการบริหารจัดการชุดข้อมูลขนาดใหญ่เพื่อแสดงผลโปเกมอนอย่างสมบูรณ์แบบ รองรับการแสดงผลบนทุกอุปกรณ์อย่างไม่มีข้อจำกัด

---

## ✨ คุณสมบัติเด่น (Key Features)

* 🏛️ **Pokédex Grid Dashboard:** หน้าหลักแสดงรายการโปเกมอนพร้อมรูปภาพในรูปแบบการ์ดที่ทันสมัย สะอาดตา โดยมีระบบเปลี่ยนสีพื้นหลังแบบ Gradient ตามธาตุหลักของโปเกมอนตัวนั้น ๆ โดยอัตโนมัติ
* 🔢 **Sequential ID Mapping (#1026 - #1351):** แก้ไขข้อจำกัดของระบบข้อมูลร่างพิเศษ (รหัสหลักหมื่น) ให้รันลำดับต่อเนื่องในรูปแบบที่ถูกต้องเป็นระเบียบตั้งแต่ #001 ไปจนสิ้นสุดตัวสุดท้ายที่ #1351 บนหน้าจอ
* 📑 **Pagination System:** ระบบแบ่งหน้าข้อมูลหน้าละ 20 ตัว ช่วยควบคุมการโหลดข้อมูลให้มีประสิทธิภาพ รวดเร็ว ลื่นไหล และผู้ใช้งานสามารถเลือกข้ามหน้าได้อย่างอิสระ
* 🔍 **Smart Search & Type Filtering:** ระบบค้นหาโปเกมอนตามชื่อภาษาอังกฤษแบบอัจฉริยะ พร้อมกล่อง Dropdown เลือกคัดกรองตามธาตุเพื่อการเข้าถึงข้อมูลที่แม่นยำ
* 📱 **Fully Responsive Design:** โครงสร้างเลเอาต์ยืดหยุ่นสูง (MUI Grid) รองรับการแสดงผลอย่างสมบูรณ์แบบ ทั้งบนหน้าจอคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน
* 📄 **Developer Profiles (About Section):** หน้าเว็บสรุปข้อมูลรายวิชา ข้อมูลสถาบัน และประวัติย่อของผู้พัฒนา พร้อมปุ่มเชื่อมโยงกลับไปยัง GitHub Source Code
* 🌍 **Cloud Deployment:** เว็บไซต์ออนไลน์ 100% บนระบบเซิร์ฟเวอร์คลาวด์ที่มีความเสถียรและรวดเร็วผ่าน Vercel

---

## 📸 ภาพหน้าจอการทำงาน (Screenshots)

### 1. หน้าหลัก (Pokédex Home Page)
แสดงรายการโปเกมอนทั้งหมดในรูปแบบ Grid Card
<img width="897" height="876" alt="image" src="https://github.com/user-attachments/assets/f9ae33a5-d868-48e5-b1c4-98e6c3d41f79" />

### 2. หน้าเกี่ยวกับผู้พัฒนา (About This Project)
หน้าเพจจัดแสดงประวัติ ข้อมูลรายวิชา และรายละเอียดของผู้พัฒนาโปรเจกต์อย่างเป็นระบบ 
![Uploading image.png…]()

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

* **Frontend Framework:** Next.js 14+ / React.js (TypeScript)
* **Styling & UI Components:** Material UI (MUI) ออกแบบการ์ดแบบโมเดิร์นโค้งมนพร้อมพื้นหลังไล่เฉดสีตามธาตุโปเกมอน
* **Data API:** PokeAPI (RESTful API) ดึงข้อมูลผ่าน Fetch API แบบเรียลไทม์
* **Deployment Platform:** Vercel

---

## 🚀 การติดตั้งเพื่อพัฒนาต่อ (Installation & Setup)

1. คลอนรีโพซิทอรีลงเครื่องคอมพิวเตอร์ของคุณ:
   ```bash
   git clone [https://github.com/sophonwit19/pokemon-app.git](https://github.com/sophonwit19/pokemon-app.git)
