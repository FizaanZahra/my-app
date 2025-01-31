import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Avatar,
  Chip,
  Stack,
  LinearProgress,
  Rating,
  Divider,
  Paper
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FeedbackForm from './FeedbackForm';

const FacultyList = ({ selectedCollege }) => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const facultyList = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
      weeklyRanking: 1,
      ratings: {
        teachingQuality: 4.5,
        punctuality: 3.8,
        subjectKnowledge: 4.7,
        studentEngagement: 4.2,
        communicationSkills: 4.0,
        overallRating: 4.2
      },
      performanceHistory: [
        { week: 'Week 1', rating: 4.3 },
        { week: 'Week 2', rating: 4.1 },
        { week: 'Week 3', rating: 4.4 },
        { week: 'Week 4', rating: 4.2 }
      ],
      advancements: [
        { label: 'Uses memes to explain complex topics', value: 85 },
        { label: 'Brings snacks during exam prep classes', value: 70 },
        { label: 'Extends deadlines without drama', value: 90 },
        { label: 'Makes learning fun with interactive sessions', value: 75 },
        { label: 'Provides extra help after class hours', value: 80 },
        { label: 'Creates helpful study materials', value: 85 }
      ],
      limitations: [
        { label: 'Shows favoritism to front-benchers only', value: 45 },
        { label: 'Shares random YouTube stories instead of teaching', value: 30 },
        { label: 'Marks attendance while sprinting to car', value: 25 },
        { label: 'Showing partiality towards certain students', value: 60 },
        { label: 'Speaks angrily during doubts', value: 55 },
        { label: 'Blames students unnecessarily', value: 40 }
      ]
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      department: 'Mathematics',
      expertise: ['Number Theory', 'Cryptography', 'Abstract Algebra'],
      weeklyRanking: 2,
      ratings: {
        teachingQuality: 4.2,
        punctuality: 4.5,
        subjectKnowledge: 4.8,
        studentEngagement: 3.9,
        communicationSkills: 4.1,
        overallRating: 4.3
      },
      performanceHistory: [
        { week: 'Week 1', rating: 4.1 },
        { week: 'Week 2', rating: 4.3 },
        { week: 'Week 3', rating: 4.2 },
        { week: 'Week 4', rating: 4.3 }
      ],
      advancements: [
        { label: 'Dad jokes that are actually funny', value: 75 },
        { label: 'Plays lofi beats during assignments', value: 80 },
        { label: 'Gives real-world math examples', value: 95 },
        { label: 'Patient with student questions', value: 85 },
        { label: 'Organizes fun math competitions', value: 70 },
        { label: 'Makes complex topics simple', value: 90 }
      ],
      limitations: [
        { label: 'Assigns homework during festival weekends', value: 40 },
        { label: 'Complex equations without explanation', value: 35 },
        { label: 'Arrives fashionably late but marks students absent', value: 20 },
        { label: 'Shows clear bias in grading', value: 45 },
        { label: 'Gets irritated at basic questions', value: 50 },
        { label: 'Criticizes students publicly', value: 35 }
      ]
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      department: 'Physics',
      expertise: ['Quantum Mechanics', 'Particle Physics', 'Astrophysics'],
      weeklyRanking: 3,
      ratings: {
        teachingQuality: 4.6,
        punctuality: 4.3,
        subjectKnowledge: 4.9,
        studentEngagement: 4.4,
        communicationSkills: 4.2,
        overallRating: 4.5
      },
      performanceHistory: [
        { week: 'Week 1', rating: 4.4 },
        { week: 'Week 2', rating: 4.5 },
        { week: 'Week 3', rating: 4.3 },
        { week: 'Week 4', rating: 4.5 }
      ],
      advancements: [
        { label: 'Interactive physics demonstrations', value: 90 },
        { label: 'Relates physics to sci-fi movies', value: 85 },
        { label: 'Virtual lab sessions with cool effects', value: 80 },
        { label: 'Encourages creative thinking', value: 95 },
        { label: 'Conducts revision games', value: 75 },
        { label: 'Shares exam tips and tricks', value: 85 }
      ],
      limitations: [
        { label: 'Too many theoretical concepts at once', value: 30 },
        { label: 'Skips important derivations', value: 25 },
        { label: 'Lab equipment often not ready', value: 35 },
        { label: 'Discriminates based on grades', value: 40 },
        { label: 'Loses temper during lab sessions', value: 45 },
        { label: 'Points out mistakes rudely', value: 35 }
      ]
    }
  ];

  const handleFeedbackClick = (faculty) => {
    setSelectedFaculty(faculty);
    setShowFeedbackForm(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    console.log('Feedback submitted:', feedback);
    setShowFeedbackForm(false);
    setSelectedFaculty(null);
  };

  if (showFeedbackForm && selectedFaculty) {
    return <FeedbackForm faculty={selectedFaculty} onSubmit={handleFeedbackSubmit} />;
  }

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50', mb: 4 }}>
        Faculty Members - {selectedCollege}
      </Typography>
      
      <Grid container spacing={3}>
        {facultyList.map((faculty) => (
          <Grid item xs={12} key={faculty.id}>
            <Card 
              elevation={3}
              sx={{ 
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CardContent>
                <Grid container spacing={3}>
                  {/* Faculty Info and Weekly Ranking */}
                  <Grid item xs={12} md={3}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: '#3498db',
                          width: 56,
                          height: 56
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 32 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50', mb: 0 }}>
                          {faculty.name}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <SchoolIcon sx={{ color: '#7f8c8d', fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary">
                            {faculty.department}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>

                    <Box sx={{ mb: 2 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <EmojiEventsIcon sx={{ color: faculty.weeklyRanking === 1 ? '#f1c40f' : '#95a5a6' }} />
                        <Typography variant="subtitle2">
                          Weekly Ranking: #{faculty.weeklyRanking}
                        </Typography>
                      </Stack>
                    </Box>

                    <Typography variant="subtitle2" sx={{ mb: 1, color: '#34495e' }}>
                      Areas of Expertise:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                      {faculty.expertise.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(52, 152, 219, 0.1)',
                            color: '#2980b9',
                            mb: 1
                          }}
                        />
                      ))}
                    </Stack>
                  </Grid>

                  {/* Performance Ratings */}
                  <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50' }}>
                      Performance Ratings
                    </Typography>
                    <Stack spacing={2}>
                      {Object.entries(faculty.ratings).map(([key, value]) => (
                        <Box key={key}>
                          <Typography variant="body2" sx={{ mb: 0.5, color: '#34495e' }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Rating value={value} precision={0.1} readOnly size="small" />
                            <Typography variant="body2" color="text.secondary">
                              {value.toFixed(1)}
                            </Typography>
                          </Stack>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Strengths and Limitations */}
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
                      {/* Strengths */}
                      <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 2, bgcolor: 'rgba(46, 213, 115, 0.1)' }}>
                          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                            <ThumbUpIcon sx={{ color: '#2ed573' }} />
                            <Typography variant="h6" sx={{ color: '#2c3e50' }}>
                              Notable Strengths
                            </Typography>
                          </Stack>
                          <Stack spacing={2}>
                            {faculty.advancements.map((item, index) => (
                              <Box key={index}>
                                <Typography variant="body2" sx={{ mb: 1, color: '#34495e' }}>
                                  {item.label}
                                </Typography>
                                <LinearProgress 
                                  variant="determinate" 
                                  value={item.value}
                                  sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: 'rgba(46, 213, 115, 0.2)',
                                    '& .MuiLinearProgress-bar': {
                                      bgcolor: '#2ed573',
                                      borderRadius: 4
                                    }
                                  }}
                                />
                              </Box>
                            ))}
                          </Stack>
                        </Paper>
                      </Grid>

                      {/* Limitations */}
                      <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 2, bgcolor: 'rgba(255, 71, 87, 0.1)' }}>
                          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                            <ThumbDownIcon sx={{ color: '#ff4757' }} />
                            <Typography variant="h6" sx={{ color: '#2c3e50' }}>
                              Areas of Concern
                            </Typography>
                          </Stack>
                          <Stack spacing={2}>
                            {faculty.limitations.map((item, index) => (
                              <Box key={index}>
                                <Typography variant="body2" sx={{ mb: 1, color: '#34495e' }}>
                                  {item.label}
                                </Typography>
                                <LinearProgress 
                                  variant="determinate" 
                                  value={item.value}
                                  sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: 'rgba(255, 71, 87, 0.2)',
                                    '& .MuiLinearProgress-bar': {
                                      bgcolor: '#ff4757',
                                      borderRadius: 4
                                    }
                                  }}
                                />
                              </Box>
                            ))}
                          </Stack>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Weekly Performance History */}
                  <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50' }}>
                      Weekly Performance
                    </Typography>
                    <Stack spacing={2}>
                      {faculty.performanceHistory.map((week, index) => (
                        <Box key={index}>
                          <Typography variant="body2" sx={{ mb: 0.5, color: '#34495e' }}>
                            {week.week}
                          </Typography>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <LinearProgress 
                              variant="determinate" 
                              value={week.rating * 20}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                flexGrow: 1,
                                bgcolor: 'rgba(52, 152, 219, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                  bgcolor: '#3498db',
                                  borderRadius: 4
                                }
                              }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {week.rating.toFixed(1)}
                            </Typography>
                          </Stack>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Action Buttons */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={2}>
                      <Button
                        variant="contained"
                        onClick={() => handleFeedbackClick(faculty)}
                        sx={{
                          background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #34495e, #2980b9)',
                          }
                        }}
                      >
                        Provide Feedback
                      </Button>

                      <Box sx={{ p: 2, bgcolor: 'rgba(52, 152, 219, 0.1)', borderRadius: 1 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          Quick Stats
                        </Typography>
                        <Stack spacing={1}>
                          <Typography variant="body2">
                            Overall Rating: {faculty.ratings.overallRating.toFixed(1)}/5.0
                          </Typography>
                          <Typography variant="body2">
                            Student Engagement: {faculty.ratings.studentEngagement.toFixed(1)}/5.0
                          </Typography>
                          <Typography variant="body2">
                            Teaching Quality: {faculty.ratings.teachingQuality.toFixed(1)}/5.0
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FacultyList;
