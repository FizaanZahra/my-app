import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Box, Paper, Typography, Grid, Chip, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const COLORS = {
  negative: ['#ff7675', '#d63031', '#e17055', '#e84393', '#6c5ce7'],
  positive: ['#00b894', '#00cec9', '#74b9ff', '#a8e6cf', '#81ecec']
};

const FeedbackGraph = ({ feedback }) => {
  const limitations = [
    { id: 'partiality', label: 'Shows favoritism to front-benchers only 😒', points: -5 },
    { id: 'offtopic', label: 'Shares random YouTube stories instead of teaching 🎬', points: -4 },
    { id: 'attendance', label: 'Marks attendance while sprinting to car 🏃', points: -3 },
    { id: 'latecoming', label: 'Arrives fashionably late but marks students absent 😤', points: -4 },
    { id: 'assignment', label: 'Assigns homework during festival weekends 📚', points: -4 }
  ];

  const advancements = [
    { id: 'memes', label: 'Uses memes to explain complex topics 😎', points: 5 },
    { id: 'snacks', label: 'Brings snacks during exam prep classes 🍪', points: 4 },
    { id: 'extension', label: 'Extends deadlines without drama 🙌', points: 3 },
    { id: 'jokes', label: 'Dad jokes that are actually funny 😄', points: 4 },
    { id: 'music', label: 'Plays lofi beats during assignments 🎵', points: 4 }
  ];

  // Filter selected limitations and advancements
  const selectedLimitations = limitations.filter(l => 
    feedback.selectedLimitations.includes(l.id)
  );

  const selectedAdvancements = advancements.filter(a => 
    feedback.selectedAdvancements.includes(a.id)
  );

  // Calculate total impact
  const limitationsImpact = selectedLimitations.reduce((sum, l) => sum + Math.abs(l.points), 0);
  const advancementsImpact = selectedAdvancements.reduce((sum, a) => sum + a.points, 0);

  // Prepare data for pie chart
  const impactData = [
    { name: 'Areas of Concern', value: limitationsImpact, type: 'negative' },
    { name: 'Notable Strengths', value: advancementsImpact, type: 'positive' }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50', textAlign: 'center', mb: 4 }}>
        Teacher Feedback Analysis
      </Typography>

      <Grid container spacing={4}>
        {/* Areas of Concern */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              bgcolor: 'rgba(255, 118, 117, 0.1)',
              borderLeft: '4px solid #ff7675'
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <ThumbDownIcon sx={{ color: '#ff7675' }} />
              <Typography variant="h6" sx={{ color: '#2c3e50' }}>
                Areas of Concern
              </Typography>
            </Stack>
            <Stack spacing={1}>
              {selectedLimitations.map((limitation) => (
                <Chip
                  key={limitation.id}
                  label={`${limitation.label} (${limitation.points})`}
                  color="error"
                  variant="outlined"
                  icon={<WarningIcon />}
                  sx={{ justifyContent: 'flex-start', height: 'auto', py: 1 }}
                />
              ))}
              {selectedLimitations.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  No major concerns identified
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* Notable Strengths */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              bgcolor: 'rgba(0, 184, 148, 0.1)',
              borderLeft: '4px solid #00b894'
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <ThumbUpIcon sx={{ color: '#00b894' }} />
              <Typography variant="h6" sx={{ color: '#2c3e50' }}>
                Notable Strengths
              </Typography>
            </Stack>
            <Stack spacing={1}>
              {selectedAdvancements.map((advancement) => (
                <Chip
                  key={advancement.id}
                  label={`${advancement.label} (+${advancement.points})`}
                  color="success"
                  variant="outlined"
                  icon={<ThumbUpIcon />}
                  sx={{ justifyContent: 'flex-start', height: 'auto', py: 1 }}
                />
              ))}
              {selectedAdvancements.length === 0 && (
                <Typography variant="body2" color="text.secondary">
                  No notable strengths highlighted
                </Typography>
              )}
            </Stack>
          </Paper>
        </Grid>

        {/* Impact Distribution */}
        {(selectedLimitations.length > 0 || selectedAdvancements.length > 0) && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, height: '400px' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#34495e', textAlign: 'center' }}>
                Impact Distribution
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value, percent }) => 
                      `${name}: ${value} points (${(percent * 100).toFixed(1)}%)`
                    }
                    outerRadius={150}
                    dataKey="value"
                  >
                    {impactData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[entry.type][0]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default FeedbackGraph;
