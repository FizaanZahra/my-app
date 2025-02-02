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
  Paper,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import HomeIcon from '@mui/icons-material/Home'; 
import CollegeSelector from './CollegeSelector';
import FacultyList from './FacultyList';
import './App.css';

function App() {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    adminName: '',
    password: ''
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleHomeClick = () => {
    setSelectedCollege('');
  };

  const handleSignUpOpen = () => {
    setOpenSignUp(true);
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUpSubmit = () => {
    console.log('Sign Up:', formData);
    setIsAuthenticated(true);
    setOpenSignUp(false);
  };

  const handleLoginSubmit = () => {
    if (formData.adminName === 'admin' && formData.password === 'pass') {
      setIsAuthenticated(true);
      setOpenLogin(false);
    } else {
      console.log('Login:', formData);
    }
  };

  return (
    <Box className="gradient-bg">
      <AppBar 
        position="static" 
        className="glass-effect"
        sx={{ 
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.3)'
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <SchoolIcon 
              sx={{ 
                color: '#2196f3', 
                fontSize: 40,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }} 
            />
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                color: '#2c3e50',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            >
              Feedback Dashboard
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              onClick={handleHomeClick}
              sx={{
                borderRadius: '8px',
                borderWidth: '1px',
                textTransform: 'none',
                px: 3,
                color: '#2196f3',
                borderColor: '#2196f3',
                '&:hover': {
                  borderColor: '#1976d2',
                  backgroundColor: 'rgba(33, 150, 243, 0.04)'
                },
                display: selectedCollege ? 'flex' : 'none' 
              }}
            >
              Home
            </Button>
            {!isAuthenticated ? (
              <>
                <Button
                  variant="outlined"
                  onClick={handleSignUpOpen}
                  sx={{
                    color: '#1a237e',
                    borderColor: '#1a237e',
                    borderWidth: '2px',
                    textTransform: 'none',
                    px: 3
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  onClick={handleLoginOpen}
                  sx={{
                    bgcolor: '#1a237e',
                    '&:hover': { bgcolor: '#0d47a1' },
                    textTransform: 'none',
                    px: 3
                  }}
                >
                  Login
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                onClick={() => setIsAuthenticated(false)}
                sx={{
                  color: '#1a237e',
                  borderColor: '#1a237e',
                  borderWidth: '2px',
                  textTransform: 'none',
                  px: 3
                }}
              >
                Logout
              </Button>
            )}
            <IconButton 
              className="hover-scale"
              sx={{ 
                background: 'rgba(44, 62, 80, 0.1)',
                borderRadius: '12px',
                p: 1
              }}
            >
              <AdminPanelSettingsIcon sx={{ fontSize: 28, color: '#2c3e50' }} />
            </IconButton>
            <Avatar 
              sx={{ 
                bgcolor: '#2c3e50',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                width: 40,
                height: 40
              }}
            >
              A
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Sign Up Dialog */}
      <Dialog open={openSignUp} onClose={handleSignUpClose}>
        <DialogTitle>College Registration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="collegeName"
            label="College Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.collegeName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="adminName"
            label="Admin Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.adminName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={formData.password}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignUpClose}>Cancel</Button>
          <Button onClick={handleSignUpSubmit} variant="contained">Register</Button>
        </DialogActions>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="adminName"
            label="Admin Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.adminName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={formData.password}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLoginSubmit} variant="contained">Login</Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Enhanced Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            className="gradient-text"
            sx={{ 
              mb: 3,
              fontWeight: 800,
              letterSpacing: '-1px',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
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
              fontWeight: 300,
              opacity: 0.9,
              lineHeight: 1.6
            }}
          >
            View and analyze faculty performance based on student feedback
          </Typography>
        </Box>

        {/* Feature Cards - Only show when no college is selected */}
        {!selectedCollege && (
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              {
                icon: <RateReviewIcon sx={{ fontSize: 50, color: '#3498db' }} />,
                title: 'Honest Feedback',
                description: 'Provide honest feedback '
              },
              {
                icon: <PeopleIcon sx={{ fontSize: 50, color: '#e74c3c' }} />,
                title: 'Faculty Growth',
                description: 'Help faculty members improve through constructive feedback'
              },
              {
                icon: <InsightsIcon sx={{ fontSize: 50, color: '#2ecc71' }} />,
                title: 'Performance Analytics',
                description: 'Track and analyze teaching effectiveness with detailed metrics'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={0}
                  className="glass-effect hover-lift"
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Box 
                    sx={{ 
                      mb: 3,
                      transform: 'scale(1.2)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      color: '#2c3e50'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#34495e',
                      opacity: 0.8,
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {/* College Selector */}
        <Box sx={{ mb: 4 }}>
          <CollegeSelector onCollegeChange={setSelectedCollege} />
        </Box>

        {/* Faculty List */}
        {selectedCollege && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Button
                variant="contained"
                startIcon={<HomeIcon />}
                onClick={handleHomeClick}
                sx={{
                  backgroundColor: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#1976d2'
                  },
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(33, 150, 243, 0.2)'
                }}
              >
                Back to Home
              </Button>
            </Box>
            <FacultyList selectedCollege={selectedCollege} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;