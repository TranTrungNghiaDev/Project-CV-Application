import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GeneralInformation } from './components/GeneralInformation'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import './styles/styles.css'

createRoot(document.getElementById('form')).render(
  <StrictMode>
    <GeneralInformation />
    <Education />
    <Experience />
    <button type="submit">Submit</button>
    <button type="button">Edit</button>
  </StrictMode>,
)
