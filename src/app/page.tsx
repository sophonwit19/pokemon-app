"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  CardActionArea,
  Skeleton,
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Button,
  Pagination,
} from "@mui/material";

interface PokemonDetail {
  name: string;
  id: string;
  types: string[];
  displayId: string; 
}

interface PokemonResponse {
  results: { name: string; url: string }[];
}

const typePalettes: Record<string, { grad: string; text: string }> = {
  grass: { grad: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)", text: "#ffffff" },
  fire: { grad: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", text: "#ffffff" },
  water: { grad: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)", text: "#ffffff" },
  bug: { grad: "linear-gradient(135deg, #a3e635 0%, #65a30d 100%)", text: "#ffffff" },
  poison: { grad: "linear-gradient(135deg, #e879f9 0%, #a21caf 100%)", text: "#ffffff" },
  flying: { grad: "linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)", text: "#ffffff" },
  normal: { grad: "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)", text: "#ffffff" },
};

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);
  const [page, setPage] = useState(1); 
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(false);

  const limit = 20; 
  const totalPokemon = 1351; 
  const countPage = Math.ceil(totalPokemon / limit); 

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setPokemonList([]);

    const currentOffset = (page - 1) * limit;
   
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`)
      .then((res) => res.json())
      .then(async (data: PokemonResponse) => {
        const detailed = await Promise.all(
          data.results.map(async (p, index) => {
            try {
              const res = await fetch(p.url);
              if (!res.ok) return null;
              const detail = await res.json();
              const sequentialNumber = currentOffset + index + 1;
              
              return { 
                name: p.name, 
                id: detail.id.toString(),
                types: detail.types.map((t: any) => t.type.name),
                displayId: sequentialNumber.toString()
              };
            } catch (err) {
              return null;
            }
          })
        );
       
        if (isMounted) {
          const validDetailed = detailed.filter((item): item is PokemonDetail => item !== null);
          setPokemonList(validDetailed); 
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [page]); 

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredList = pokemonList.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType === "all" || p.types.includes(selectedType))
    );
  });

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", pb: 6 }}>
    
      <Box sx={{ background: "linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)", py: 5, mb: 4, textAlign: "center", boxShadow: "0 4px 20px rgba(255, 78, 80, 0.2)", position: "relative" }}>
        <Button
          variant="contained"
          href="/about"
          sx={{ position: "absolute", top: 20, right: 20, bgcolor: "#ffffff", color: "#ff4e50", fontWeight: 800, fontSize: "0.85rem", borderRadius: 3, px: 2.5, py: 0.8, textTransform: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 10, "&:hover": { bgcolor: "#fff5f5" } }}
        >
          About This Project
        </Button>

        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#ffffff", letterSpacing: -0.5, textShadow: "0 4px 8px rgba(0,0,0,0.15)" }}>
            ⚡ POKÉMON WORLD ⚡
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
      
        <Box sx={{ bgcolor: "#ffffff", p: 2.5, borderRadius: 4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)", border: "2px solid #e2e8f0", mb: 5, display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
          <TextField
            fullWidth
            placeholder="🔍 ค้นหาชื่อโปเกมอน..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "#fdfdfd", "&.Mui-focused fieldset": { borderColor: "#ff4e50" } } }}
          />
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel sx={{ "&.Mui-focused": { color: "#ff4e50" } }}>เลือกตามธาตุ</InputLabel>
            <Select
              value={selectedType}
              label="เลือกตามธาตุ"
              onChange={(e) => setSelectedType(e.target.value)}
              sx={{ borderRadius: 3, "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#ff4e50" } }}
            >
              <MenuItem value="all">ธาตุทั้งหมด</MenuItem>
              {Object.keys(typePalettes).filter(t => t !== "normal").map((t) => (
                <MenuItem key={t} value={t}>{t.toUpperCase()}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          {filteredList.map((p) => {
            const palette = typePalettes[p.types[0]] || typePalettes.normal;
            const formattedId = `#${p.displayId.padStart(3, "0")}`;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={`${p.name}-${p.id}`}>
                <Card sx={{
                  bgcolor: "#ffffff", borderRadius: 5, border: "2px solid #e2e8f0", overflow: "hidden", transition: "all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)", position: "relative",
                  "&:hover": { transform: "translateY(-8px) scale(1.02)", boxShadow: "0 20px 30px -10px rgba(0,0,0,0.15)", borderColor: "#ff4e50" }
                }}>
                  <Box sx={{ background: palette.grad, height: 65, position: "relative" }}>
                    <Typography sx={{ position: "absolute", top: 12, left: 16, fontSize: "0.8rem", fontWeight: 800, color: "#ffffff", bgcolor: "rgba(0,0,0,0.2)", px: 1.2, py: 0.3, borderRadius: 2 }}>
                      {formattedId}
                    </Typography>
                  </Box>

                  <CardActionArea href={`/pokemon/${p.name}`}>
                    <CardContent sx={{ textAlign: "center", pt: 0, pb: 3, position: "relative" }}>
                      <Box sx={{ width: 100, height: 100, margin: "auto", mt: "-50px", mb: 1.5, borderRadius: "50%", bgcolor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 16px rgba(0,0,0,0.1)", border: "3px solid #ffffff" }}>
                        <Avatar src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt={p.name} sx={{ width: 85, height: 85 }} />
                      </Box>
                      <Typography variant="h6" sx={{ textTransform: "capitalize", fontWeight: 900, color: "#0f172a", mb: 1.5, letterSpacing: 0.2 }}>
                        {p.name}
                      </Typography>
                      <Box sx={{ display: "flex", justifyContent: "center", gap: 0.6, flexWrap: "wrap" }}>
                        {p.types.map((t) => {
                          const tagPalette = typePalettes[t] || typePalettes.normal;
                          return (
                            <Box key={t} sx={{ background: tagPalette.grad, color: tagPalette.text, px: 2, py: 0.4, borderRadius: 10, fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                              {t}
                            </Box>
                          );
                        })}
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}

          {loading && [...Array(limit)].map((_, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
              <Card sx={{ bgcolor: "#ffffff", borderRadius: 5, border: "2px solid #e2e8f0" }}>
                <Box sx={{ bgcolor: "#e2e8f0", height: 65 }} />
                <CardContent sx={{ textAlign: "center", pt: 0, pb: 3 }}>
                  <Skeleton variant="circular" width={100} height={100} sx={{ margin: "auto", mt: "-50px", mb: 2 }} />
                  <Skeleton variant="text" width="60%" sx={{ margin: "auto", mb: 1 }} />
                  <Skeleton variant="text" width="40%" sx={{ margin: "auto" }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {countPage > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Pagination 
              count={countPage} 
              page={page} 
              onChange={handlePageChange} 
              color="primary"
              size="large"
              disabled={loading}
              sx={{
                "& .MuiPaginationItem-root": {
                  fontWeight: 700,
                  borderRadius: 2,
                  "&.Mui-selected": {
                    background: "linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)",
                    color: "#ffffff",
                    "&:hover": {
                      background: "linear-gradient(135deg, #e03e40 0%, #deb918 100%)",
                    }
                  }
                }
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}