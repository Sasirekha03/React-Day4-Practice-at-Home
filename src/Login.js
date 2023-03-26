import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

function Login() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button data-testid="login" onClick={() => setOpen(true)}>Login</Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            data-testid="username"
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            fullWidth
          />
          <TextField
            data-testid="password"
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button data-testid="cancel" onClick={handleCancel}>Cancel</Button>
          <Button data-testid="dia-login" onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;