import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  AppBar, 
  Toolbar, 
  Button,
  IconButton,
  Avatar,
  Grid,
  Paper
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import CollegeSelector from './CollegeSelector';
import FacultyList from './FacultyList';
import './App.css';

function App() {
  const [selectedCollege, setSelectedCollege] = useState('');

  return (
    <div>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', mb: 3 }}>
        <Toolbar>
          <SchoolIcon sx={{ color: '#2c3e50', fontSize: 40, mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#2c3e50' }}>
           Feedback Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="outlined" color="primary">
              Sign Up
            </Button>
            <Button variant="contained" color="primary">
              Login
            </Button>
            <IconButton color="primary" sx={{ ml: 2 }}>
              <AdminPanelSettingsIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Avatar sx={{ bgcolor: '#2c3e50', ml: 2 }}>A</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              background: 'linear-gradient(45deg, #2c3e50, #3498db)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 600,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Faculty Performance Dashboard
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#34495e',
              maxWidth: '800px',
              margin: '0 auto',
              fontWeight: 300
            }}
          >
            View and analyze faculty performance based on student feedback
          </Typography>
        </Box>

        {!selectedCollege && (
          <Grid container spacing={4} sx={{ mt: 4, mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%', background: 'rgba(255,255,255,0.9)' }}>
                <RateReviewIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Anonymous Feedback
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Provide honest feedback while maintaining complete anonymity
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%', background: 'rgba(255,255,255,0.9)' }}>
                <PeopleIcon sx={{ fontSize: 50, color: '#e74c3c', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Faculty Growth
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Help faculty members improve through constructive feedback
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%', background: 'rgba(255,255,255,0.9)' }}>
                <InsightsIcon sx={{ fontSize: 50, color: '#2ecc71', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Performance Analytics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track and analyze teaching effectiveness with detailed metrics
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}

        <CollegeSelector 
          selectedCollege={selectedCollege} 
          onCollegeChange={setSelectedCollege} 
        />

        {selectedCollege && (
          <FacultyList selectedCollege={selectedCollege} />
        )}
      </Container>
    </div>
  );
}

export default App;
