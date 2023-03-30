import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
// Layout
import { JournalLayout } from '../layout';
// Views
import {NoteView, NothingSelectedView} from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>

      <NothingSelectedView />
      { /*<NoteView />*/ }

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          position: 'fixed',
          right: 50,
          bottom: 50,
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.8
          }
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  );
}
