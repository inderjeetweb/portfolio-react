import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { navLinks, profile } from './data/content';

test('renders the hero with name and calls to action', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(profile.name);
  expect(screen.getByRole('link', { name: /view projects/i })).toHaveAttribute('href', '#projects');
  expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', profile.resumeUrl);
});

test('renders every section the navbar links to', () => {
  const { container } = render(<App />);

  const nav = screen.getByRole('navigation', { name: /primary/i });
  navLinks.forEach(({ id, label }) => {
    expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`);
    expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
  });
});

test('toggles between dark and light themes', () => {
  // public/index.html starts the page in dark mode; mirror that here.
  document.documentElement.classList.add('dark');
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /switch to light theme/i }));
  expect(document.documentElement).not.toHaveClass('dark');
  fireEvent.click(screen.getByRole('button', { name: /switch to dark theme/i }));
  expect(document.documentElement).toHaveClass('dark');
});

test('validates the contact form before sending', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
});
