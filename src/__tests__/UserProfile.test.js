import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('should display users profile page when user clicks on a particular user on home page', async () => {
  render(<App />);
  const userCards = await screen.findAllByTestId('user-card');
  await waitFor(() => {
    userEvent.click(userCards[0]);
    expect(screen.queryByTestId('user-profile-page')).toBeVisible();
  });
});
