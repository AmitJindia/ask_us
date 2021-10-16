import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import AdminApproval from './AdminApproval';
import ReviewerDenied from './ReviewerDenied';
import ReviewerReopen from './ReviewerReopen';

import { AppBar, Box, Typography, Tab, Tabs, useTheme, Container, Grid, Paper } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ApprovalTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl">
      <Paper elevation={3}>
        <Box p={3}>
          {/* <Box sx={{ bgcolor: 'background.paper', width: 500 }}> */}
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Approval" {...a11yProps(0)} />
              <Tab label="Denied" {...a11yProps(1)} />
              <Tab label="Reopned " {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <AdminApproval />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ReviewerDenied />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ReviewerReopen/>
          </TabPanel>
          {/* </SwipeableViews> */}
          {/* </Box> */}
        </Box>
      </Paper>
    </Container>
  );
}
