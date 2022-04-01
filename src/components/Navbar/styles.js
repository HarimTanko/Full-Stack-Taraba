import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  brandContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  profile: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));
