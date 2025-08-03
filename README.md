# Weight Converter App

A modern, responsive web application for converting weights between different units. Built with React, TypeScript, and Vite.

## Features

- **Real-time Conversion**: Instantly convert weights as you type
- **Multiple Units**: Support for 7 different weight units:
  - Milligrams (mg)
  - Grams (g)
  - Kilograms (kg)
  - Pounds (lb)
  - Ounces (oz)
  - Stones (st)
  - Tons (ton)
- **User-Friendly Interface**: Clean, intuitive design that works on both desktop and mobile
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode Support**: Automatically adapts to system preferences
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Precise Calculations**: Handles decimal and fractional values with appropriate precision

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Usage

1. **Enter a weight value** in the input field
2. **Select the input unit** from the "From" dropdown
3. **Select the output unit** from the "To" dropdown
4. **View the result** in real-time
5. **Use the swap button** (⇄) to quickly switch between units

### Supported Input Formats

- Whole numbers: `5`, `100`
- Decimal numbers: `1.5`, `250.75`
- Negative numbers: `-10`, `-5.5`
- Fractions: `1/2`, `3/4` (will be converted to decimal)

## Technical Details

### Technologies Used

- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with gradients and animations

### Architecture

- **Component-based**: Single main component with clear separation of concerns
- **State Management**: React hooks for local state
- **Real-time Updates**: useEffect for automatic conversion
- **Responsive Design**: CSS Grid and Flexbox with media queries

### Conversion Logic

All conversions are performed by:
1. Converting the input value to grams (using conversion factors)
2. Converting from grams to the target unit
3. Formatting the result with appropriate precision

### Precision Handling

The app automatically adjusts decimal places based on the magnitude of the result:
- Very small numbers (< 0.000001): Scientific notation
- Small numbers (< 0.01): 6 decimal places
- Numbers < 1: 4 decimal places
- Numbers < 100: 3 decimal places
- Numbers < 10,000: 2 decimal places
- Larger numbers: 1 decimal place

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Future Enhancements

- [ ] Add more weight units (metric tons, carats, etc.)
- [ ] Unit conversion history
- [ ] Favorite conversions
- [ ] Offline support
- [ ] PWA capabilities
- [ ] Voice input support
- [ ] Share conversion results
