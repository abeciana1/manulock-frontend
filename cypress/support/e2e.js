/// <reference types="cypress" />
import { addClerkCommands } from '@clerk/testing/cypress';
import Cypress from 'cypress';
import cy from 'cypress';

addClerkCommands({ Cypress, cy });
