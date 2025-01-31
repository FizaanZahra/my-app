import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Rating, 
  Button, 
  Box,
  Slider,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  Stack,
  Paper,
  Divider,
  Alert,
  LinearProgress
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackGraph from './FeedbackGraph';

const FeedbackForm = ({ faculty, onSubmit }) => {
  const [feedback, setFeedback] = useState({
    teachingPoints: 0,
    punctualityPoints: 0,
    knowledgePoints: 0,
    communicationPoints: 0,
    supportPoints: 0,
    managementPoints: 0,
    selectedLimitations: [],
    selectedAdvancements: []
  });

  const [totalPoints, setTotalPoints] = useState(0);
  const MAX_TOTAL_POINTS = 100;
  const MAX_POINTS_PER_CATEGORY = 20;

  const [submitted, setSubmitted] = useState(false);

  const pointCategories = [
    { name: 'Teaching Effectiveness', key: 'teachingPoints', color: '#3498db' },
    { name: 'Punctuality & Time Management', key: 'punctualityPoints', color: '#e74c3c' },
    { name: 'Subject Knowledge', key: 'knowledgePoints', color: '#2ecc71' },
    { name: 'Communication Skills', key: 'communicationPoints', color: '#f1c40f' },
    { name: 'Student Support', key: 'supportPoints', color: '#9b59b6' },
    { name: 'Class Management', key: 'managementPoints', color: '#e67e22' }
  ];

  const limitations = [
    { id: 'favoritism', label: 'Shows favoritism to front-benchers only', points: -5 },
    { id: 'youtube', label: 'Shares random YouTube stories instead of teaching', points: -4 },
    { id: 'attendance', label: 'Marks attendance while sprinting to car', points: -3 },
    { id: 'late', label: 'Arrives fashionably late but marks students absent', points: -4 },
    { id: 'homework', label: 'Assigns homework during festival weekends', points: -4 },
    { id: 'partiality', label: 'Showing partiality towards certain students', points: -5 },
    { id: 'angry', label: 'Speaks angrily during doubts', points: -4 },
    { id: 'blame', label: 'Blames students unnecessarily', points: -3 },
    { id: 'demotivate', label: 'Demotivates students with harsh comments', points: -5 },
    { id: 'serious', label: 'Always too serious and unapproachable', points: -3 },
    { id: 'grades', label: 'Gives higher grades to favorite students', points: -5 },
    { id: 'interaction', label: 'Only interacts with particular students', points: -4 },
    { id: 'irritated', label: 'Gets irritated at basic questions', points: -4 },
    { id: 'criticism', label: 'Criticizes students publicly', points: -5 },
    { id: 'stress', label: 'Creates stressful classroom environment', points: -4 }
  ];

  const advancements = [
    { id: 'memes', label: 'Uses memes to explain complex topics', points: 5 },
    { id: 'snacks', label: 'Brings snacks during exam prep classes', points: 4 },
    { id: 'deadlines', label: 'Extends deadlines without drama', points: 3 },
    { id: 'jokes', label: 'Dad jokes that are actually funny', points: 4 },
    { id: 'music', label: 'Plays lofi beats during assignments', points: 4 },
    { id: 'interactive', label: 'Makes learning fun with interactive sessions', points: 5 },
    { id: 'extraHelp', label: 'Provides extra help after class hours', points: 5 },
    { id: 'materials', label: 'Creates helpful study materials', points: 4 },
    { id: 'patient', label: 'Patient with student questions', points: 5 },
    { id: 'competitions', label: 'Organizes fun academic competitions', points: 4 },
    { id: 'examples', label: 'Gives real-world examples', points: 4 },
    { id: 'revision', label: 'Conducts effective revision sessions', points: 5 },
    { id: 'creative', label: 'Encourages creative thinking', points: 4 },
    { id: 'tips', label: 'Shares exam tips and tricks', points: 3 },
    { id: 'feedback', label: 'Provides constructive feedback', points: 4 }
  ];

  const handlePointChange = (category, value) => {
    const newFeedback = { ...feedback, [category]: value };
    const newTotal = Object.values(newFeedback)
      .filter(val => typeof val === 'number')
      .reduce((sum, val) => sum + val, 0);
    
    if (newTotal <= MAX_TOTAL_POINTS) {
      setFeedback(newFeedback);
      setTotalPoints(newTotal);
    }
  };

  const handleLimitationToggle = (limitation) => {
    const newLimitations = feedback.selectedLimitations.includes(limitation.id)
      ? feedback.selectedLimitations.filter(id => id !== limitation.id)
      : [...feedback.selectedLimitations, limitation.id];
    setFeedback({ ...feedback, selectedLimitations: newLimitations });
  };

  const handleAdvancementToggle = (advancement) => {
    const newAdvancements = feedback.selectedAdvancements.includes(advancement.id)
      ? feedback.selectedAdvancements.filter(id => id !== advancement.id)
      : [...feedback.selectedAdvancements, advancement.id];
    setFeedback({ ...feedback, selectedAdvancements: newAdvancements });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(feedback);
  };

  return (
    <>
      <Card className="feedback-form">
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50' }}>
            Point-Based Feedback for {faculty.name}
          </Typography>

          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="subtitle2">Points System:</Typography>
            • Maximum {MAX_TOTAL_POINTS} points total across all categories<br/>
            • Each category has a maximum of {MAX_POINTS_PER_CATEGORY} points<br/>
            • Select limitations will deduct points<br/>
            • Select advancements will add bonus points
          </Alert>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#34495e' }}>
              Performance Points Distribution
            </Typography>
            {pointCategories.map(category => (
              <Box key={category.key} sx={{ my: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                  <Typography sx={{ minWidth: 200 }}>{category.name}</Typography>
                  <Rating
                    name={category.key}
                    value={feedback[category.key] / 4}
                    max={5}
                    onChange={(_, value) => handlePointChange(category.key, value * 4)}
                    icon={<StarIcon sx={{ color: category.color }} />}
                    emptyIcon={<StarBorderIcon />}
                    size="large"
                  />
                  <Typography sx={{ minWidth: 50, textAlign: 'right' }}>
                    {feedback[category.key]}/{MAX_POINTS_PER_CATEGORY}
                  </Typography>
                </Stack>
                <Slider
                  value={feedback[category.key]}
                  onChange={(_, value) => handlePointChange(category.key, value)}
                  max={MAX_POINTS_PER_CATEGORY}
                  sx={{ 
                    '& .MuiSlider-thumb': { backgroundColor: category.color },
                    '& .MuiSlider-track': { backgroundColor: category.color }
                  }}
                />
              </Box>
            ))}
            
            <Paper sx={{ p: 2, bgcolor: 'rgba(52, 152, 219, 0.1)', mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Total Points: {totalPoints}/{MAX_TOTAL_POINTS}
              </Typography>
            </Paper>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box component="form" sx={{ mb: 4 }}>
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <FormLabel component="legend" sx={{ color: '#e74c3c', mb: 2 }}>
                Areas Needing Improvement (-points)
              </FormLabel>
              <FormGroup>
                {limitations.map(limitation => (
                  <FormControlLabel
                    key={limitation.id}
                    control={
                      <Checkbox
                        checked={feedback.selectedLimitations.includes(limitation.id)}
                        onChange={() => handleLimitationToggle(limitation)}
                        sx={{ 
                          color: '#e74c3c',
                          '&.Mui-checked': {
                            color: '#e74c3c',
                          }
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        {limitation.label} ({limitation.points} points)
                      </Typography>
                    }
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>

          <Box component="form" sx={{ mb: 4 }}>
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <FormLabel component="legend" sx={{ color: '#2ecc71', mb: 2 }}>
                Notable Advancements (+points)
              </FormLabel>
              <FormGroup>
                {advancements.map(advancement => (
                  <FormControlLabel
                    key={advancement.id}
                    control={
                      <Checkbox
                        checked={feedback.selectedAdvancements.includes(advancement.id)}
                        onChange={() => handleAdvancementToggle(advancement)}
                        sx={{ 
                          color: '#2ecc71',
                          '&.Mui-checked': {
                            color: '#2ecc71',
                          }
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        {advancement.label} (+{advancement.points} points)
                      </Typography>
                    }
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Total Points: {totalPoints}/100
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={Math.max(0, Math.min(100, totalPoints))}
              sx={{
                height: 10,
                borderRadius: 5,
                bgcolor: totalPoints < 0 ? 'error.light' : 'success.light',
                '& .MuiLinearProgress-bar': {
                  bgcolor: totalPoints < 0 ? 'error.main' : 'success.main',
                  borderRadius: 5
                }
              }}
            />
          </Box>

          <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            size="large"
            onClick={handleSubmit}
            disabled={totalPoints === 0}
            sx={{
              background: 'linear-gradient(45deg, #2c3e50, #3498db)',
              '&:hover': {
                background: 'linear-gradient(45deg, #34495e, #2980b9)',
              }
            }}
          >
            Submit Feedback
          </Button>
        </CardContent>
      </Card>
      
      {submitted && <FeedbackGraph feedback={feedback} />}
    </>
  );
};

export default FeedbackForm;
