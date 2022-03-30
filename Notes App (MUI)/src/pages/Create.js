import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormLabel, FormControlLabel } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Field = styled(TextField)({
  marginBottom: 20,
  marginTop: 20,
  display: 'block',
});

export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleErr, setTitleErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false);
  const [category, setCategory] = useState("todos");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false);
    setDetailsErr(false);

    if(title === '') {
      setTitleErr(true);
    }
    if(details === '') {
      setDetailsErr(true);
    }
    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <form noValidate autocomplete="off" onSubmit={handleSubmit}>
        <Field
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={titleErr}
          helperText={titleErr ? "Title is required!" : ""}
        />
        <Field
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          label="Details"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsErr}
          helperText={detailsErr ? "Details are required!" : ""}
        />
        <FormControl margin="normal" sx={{ display: 'block' }}>
          <FormLabel color="secondary" >Select Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio color='secondary' />} label="Money"/>
            <FormControlLabel value="todos" control={<Radio color='secondary' />} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio color='secondary' />} label="Reminders"/>
            <FormControlLabel value="work" control={<Radio color='secondary' />} label="Work"/>
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
