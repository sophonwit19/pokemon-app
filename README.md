# ⚡ Pokémon World App

เว็บแอปพลิเคชันสำหรับค้นหา คัดกรอง และแสดงข้อมูลโปเกมอนทั่วโลก ดึงข้อมูลแบบ Real-time จาก **PokeAPI** โดยพัฒนาขึ้นด้วยเทคโนโลยี Next.js (App Router) และออกแบบหน้าจอให้สวยงามทันสมัย รองรับทุกอุปกรณ์ (Responsive Design) ด้วย Material UI (MUI)

---

📝 รายละเอียดโปรเจกต์ (Project Description)

โปรเจกต์นี้จัดทำขึ้นเพื่อเรียนรู้และฝึกฝนการพัฒนาเว็บแอปพลิเคชันฝั่งหน้าบ้าน (Front-end Web Programming) ยุคใหม่ โดยนำข้อมูลสดแบบ Real-time จาก PokeAPI มาประมวลผลและนำเสนอผ่านหน้าต่าง Interface ที่สวยงาม เป็นมิตรกับผู้ใช้งาน (User-Friendly UI) จัดเต็มด้วยระบบการค้นหา คัดกรองข้อมูล และการบริหารจัดการชุดข้อมูลขนาดใหญ่เพื่อแสดงผลโปเกมอนอย่างสมบูรณ์แบบ รองรับการแสดงผลบนทุกอุปกรณ์อย่างไม่มีข้อจำกัด

✨ คุณสมบัติเด่น (Key Features)

🏛️ Pokédex Grid Dashboard: หน้าหลักแสดงรายการโปเกมอนพร้อมรูปภาพในรูปแบบการ์ดที่ทันสมัย สะอาดตา โดยมีระบบเปลี่ยนสีพื้นหลังแบบ Gradient ตามธาตุหลักของโปเกมอนตัวนั้น ๆ โดยอัตโนมัติ
🔢 Sequential ID Mapping (#1026 - #1351): แก้ไขข้อจำกัดของระบบข้อมูลร่างพิเศษ (รหัสหลักหมื่น) ให้รันลำดับต่อเนื่องในรูปแบบที่ถูกต้องเป็นระเบียบตั้งแต่ #001 ไปจนสิ้นสุดตัวสุดท้ายที่ #1351 บนหน้าจอ
📑 Pagination System: ระบบแบ่งหน้าข้อมูลหน้าละ 20 ตัว ช่วยควบคุมการโหลดข้อมูลให้มีประสิทธิภาพ รวดเร็ว ลื่นไหล และผู้ใช้งานสามารถเลือกข้ามหน้าได้อย่างอิสระ
🔍 Smart Search & Type Filtering: ระบบค้นหาโปเกมอนตามชื่อภาษาอังกฤษแบบอัจฉริยะ พร้อมกล่อง Dropdown เลือกคัดกรองตามธาตุเพื่อการเข้าถึงข้อมูลที่แม่นยำ
📱 Fully Responsive Design: โครงสร้างเลเอาต์ยืดหยุ่นสูง (MUI Grid) รองรับการแสดงผลอย่างสมบูรณ์แบบ ทั้งบนหน้าจอคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน
📄 Developer Profiles (About Section): หน้าเว็บสรุปข้อมูลรายวิชา ข้อมูลสถาบัน และประวัติย่อของผู้พัฒนา พร้อมปุ่มเชื่อมโยงกลับไปยัง GitHub Source Code
🌍 Cloud Deployment: เว็บไซต์ออนไลน์ 100% บนระบบเซิร์ฟเวอร์คลาวด์ที่มีความเสถียรและรวดเร็วผ่าน Vercel

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

* **Framework:** Next.js 14+ (TypeScript)
* **UI Library:** Material UI (MUI)
* **API Source:** [PokeAPI v2](https://pokeapi.co/)
* **Deployment Platform:** Vercel

---

## 📷 ภาพตัวอย่างแอปพลิเคชัน (Screenshots)

### 1. หน้าหลักพร้อมระบบ Pagination และการเรียงลำดับ ID ล่าสุด จนถึงตัวที่ #1351
<img width="1806" height="893" alt="image" src="https://github.com/user-attachments/assets/899d34d3-11fe-46ea-8f59-ca433f9717fa" />


### 2. หน้าข้อมูลส่วนตัวผู้พัฒนา (About Page)
![About Page Screenshot](https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000)

---

## 👨‍💻 ข้อมูลผู้พัฒนา (Developer Information)

* **ชื่อ-นามสกุล:** นายโสภณวิชญ์ แก้วศิลา
* **รหัสนักศึกษา:** 673450209-9
* **รายวิชา:** Front-end Web Programming
* **สาขาวิชา:** Computer and Information Science
* **คณะ:** คณะสหวิทยาการ
* **มหาวิทยาลัย:** มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
* **Repository:** [GitHub - pokemon-app](https://github.com/sophonwit19/pokemon-app.git)

---

## 📦 วิธีการติดตั้งและทดลองรันโปรเจกต์ (Getting Started)

1. คลอนโปรเจกต์ลงมาในเครื่องคอมพิวเตอร์ของคุณ:
   ```bash
   git clone [https://github.com/sophonwit19/pokemon-app.git](https://github.com/sophonwit19/pokemon-app.git)
