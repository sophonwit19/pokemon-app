"use client";

import { Box, Card, CardContent, Typography, Button, Avatar, Divider, Container } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", py: 6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Container maxWidth="sm">
        
        <Card 
          sx={{ 
            bgcolor: "#ffffff",
            borderRadius: 5, 
            border: "2px solid #e2e8f0",
            overflow: "hidden",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
            mb: 4 
          }}
        >
          <Box sx={{ background: "linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)", height: 100, position: "relative" }} />

          <CardContent sx={{ textAlign: "center", pt: 0, pb: 4, px: 4 }}>
            
            <Box sx={{ width: 110, height: 110, margin: "auto", mt: "-55px", mb: 2, borderRadius: "50%", bgcolor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 16px rgba(0,0,0,0.1)", border: "4px solid #ffffff" }}>
              <Avatar 
                src="1.jpg" 
                alt="Developer Avatar" 
                sx={{ width: 95, height: 95 }}
              />
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 0.5 }}>
              นายโสภณวิชญ์ แก้วศิลา
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#64748b", fontWeight: 700, mb: 3 }}>
              รหัสนักศึกษา : 673450209-9
            </Typography>

            <Divider sx={{ my: 3, borderStyle: "dashed", borderColor: "#cbd5e1" }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, textAlign: "left", mb: 2 }}>
              <Box>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>รายวิชา (Course)</Typography>
                <Typography sx={{ fontWeight: 700, color: "#334155", fontSize: "1.05rem" }}>Front-end Web Programming</Typography>
              </Box>
              
              <Box>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>สาขาวิชา (Major)</Typography>
                <Typography sx={{ fontWeight: 700, color: "#334155", fontSize: "1.05rem" }}>Computer and Information Science</Typography>
              </Box>

              <Box>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>คณะ (Faculty)</Typography>
                <Typography sx={{ fontWeight: 700, color: "#334155", fontSize: "1.05rem" }}>คณะสหวิทยาการ</Typography>
              </Box>

              <Box>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>มหาวิทยาลัย (University)</Typography>
                <Typography sx={{ fontWeight: 700, color: "#334155", fontSize: "1.05rem" }}>มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3, borderStyle: "solid", borderColor: "#f1f5f9" }} />

            <Box sx={{ textAlignment: "center" }}>
              <Button
                variant="outlined"
                href="https://github.com/sophonwit19/pokemon-app.git"
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  borderRadius: 3,
                  py: 1.2,
                  fontWeight: 800,
                  color: "#24292e",
                  borderColor: "#cfd8dc",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  "&:hover": {
                    bgcolor: "#f6f8fa",
                    borderColor: "#24292e",
                  }
                }}
              >
                📁 GitHub Source Code
              </Button>
            </Box>

          </CardContent>
        </Card>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button 
            variant="contained" 
            href="/" 
            sx={{ 
              borderRadius: 4, 
              px: 5, 
              py: 1.5,
              fontWeight: 800, 
              background: "linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)",
              color: "#ffffff",
              textTransform: "none",
              boxShadow: "0 6px 20px rgba(255, 78, 80, 0.2)",
              transition: "all 0.2s",
              "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(255, 78, 80, 0.3)" } 
            }}
          >
              กลับสู่หน้าหลัก
          </Button>
        </Box>

      </Container>
    </Box>
  );
}