import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material';
import { styled } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const AvatarComp = styled(Avatar)(({ noteType }) => ({
  backgroundColor: noteType === 'money' ? 'red' : 'blue',
}));

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card
        elevation={1}
        sx={{ border: note.category === 'work' && '1px solid red' }}
      >
        <CardHeader
          avatar={
            <AvatarComp noteType={note.category}>
              {note.category[0].toUpperCase()}
            </AvatarComp>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}