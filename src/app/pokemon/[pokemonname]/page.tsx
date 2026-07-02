"use client";

import { use, useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, LinearProgress, Skeleton, Button, Chip } from "@mui/material";

interface PokemonDetail {
  id: number;
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  cries: { latest: string };
}

export default function PokemonDetailPage({ params }: { params: Promise<{ pokemonname: string }> }) {
  const { pokemonname } = use(params);
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [evolution, setEvolution] = useState<string[]>([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        const pokemonData = await pokemonRes.json();
        setPokemon(pokemonData);

        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonname}`);
        const speciesData = await speciesRes.json();

        const evolutionRes = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionRes.json();

        const evoList: string[] = [];
        let current = evolutionData.chain;
        while (current) {
          evoList.push(current.species.name);
          current = current.evolves_to[0];
        }
        setEvolution(evoList);
      } catch (error) {
        console.error(error);
      }
    }
    loadPokemon();
  }, [pokemonname]);

  if (!pokemon) {
    return (
      <Box sx={{ maxWidth: 550, mx: "auto", mt: 8, px: 2 }}>
        <Skeleton variant="rectangular" width="100%" height={450} sx={{ borderRadius: 4 }} />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 550, mx: "auto", mt: 4, px: 2, pb: 6 }}>
      {/* การ์ดพื้นหลัง Soft Gradient ละมุนตา */}
      <Card sx={{ borderRadius: 5, background: "linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          
          {/* ข้อมูลทั่วไปด้านบน */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#94a3b8" }}>
              POKÉMON #{String(pokemon.id).padStart(3, "0")}
            </Typography>
            <Typography variant="h3" sx={{ textTransform: "capitalize", fontWeight: 900, color: "#1e293b", my: 0.5 }}>
              {pokemon.name}
            </Typography>
            
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1.5 }}>
              {pokemon.types.map((t) => (
                <Chip key={t.type.name} label={t.type.name} color="secondary" size="small" sx={{ textTransform: "uppercase", fontWeight: 800, px: 1, bgcolor: "#3b82f6" }} />
              ))}
            </Box>
          </Box>

          {/* กรอบแสดงรูปโปเกมอนตรงกลาง */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Box sx={{ bgcolor: "#ffffff", borderRadius: "50%", p: 2, boxShadow: "0 8px 20px rgba(0,0,0,0.04)", border: "2px dashed #3b82f6" }}>
              <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} style={{ width: "180px", height: "180px", objectFit: "contain" }} />
            </Box>
          </Box>

          {/* แถบค่าพลัง (Stats) */}
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontWeight: 800, color: "#475569", mb: 1.5, fontSize: "0.9rem" }}>Base Stats</Typography>
            {pokemon.stats.map((s) => (
              <Box key={s.stat.name} sx={{ mb: 1.5 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.3 }}>
                  <Typography sx={{ textTransform: "capitalize", fontWeight: 700, color: "#64748b", fontSize: "0.8rem" }}>{s.stat.name.replace("-", " ")}</Typography>
                  <Typography sx={{ fontWeight: 800, color: "#1e293b", fontSize: "0.8rem" }}>{s.base_stat}</Typography>
                </Box>
                <LinearProgress variant="determinate" value={Math.min(s.base_stat, 100)} sx={{ height: 6, borderRadius: 3, bgcolor: "#e2e8f0", "& .MuiLinearProgress-bar": { bgcolor: "#10b981" } }} />
              </Box>
            ))}
          </Box>

          {/* สายวิวัฒนาการ */}
          <Box sx={{ bgcolor: "rgba(255,255,255,0.7)", p: 2, borderRadius: 3, border: "1px solid #e2e8f0", mb: 3 }}>
            <Typography sx={{ fontWeight: 800, color: "#64748b", mb: 1, fontSize: "0.8rem" }}>Evolution Chain</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}>
              {evolution.map((evo, idx) => (
                <Box key={evo} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Chip label={evo} size="small" variant={evo === pokemonname ? "filled" : "outlined"} color={evo === pokemonname ? "success" : "default"} sx={{ textTransform: "capitalize", fontWeight: 700 }} />
                  {idx < evolution.length - 1 && <Typography sx={{ color: "#cbd5e1", fontWeight: "bold" }}>&gt;</Typography>}
                </Box>
              ))}
            </Box>
          </Box>

          {/* เสียงร้อง */}
          <Box>
            <Typography sx={{ fontWeight: 800, color: "#64748b", mb: 0.5, fontSize: "0.8rem" }}>Cry</Typography>
            <audio controls style={{ width: "100%", height: "36px" }}><source src={pokemon.cries.latest} /></audio>
          </Box>

        </CardContent>
      </Card>

      {/* ย้ายปุ่มย้อนกลับมาไว้ด้านล่างซ้าย (นอกการ์ด) */}
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button 
          variant="outlined" 
          href="/" 
          sx={{ 
            borderRadius: 3, 
            px: 3, 
            fontWeight: "bold", 
            border: "2px solid #3b82f6", 
            color: "#3b82f6", 
            "&:hover": { border: "2px solid #2563eb", bgcolor: "#eff6ff" } 
          }}
        >
          ⬅ กลับหน้าแรก
        </Button>
      </Box>
    </Box>
  );
}