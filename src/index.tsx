/* @refresh reload */
import { render } from 'solid-js/web';
import {ProveedorContador} from './contexts/ContextoContador'
import './index.css';
import App from './App';

render(() => (
    <ProveedorContador>
        <App />
    </ProveedorContador>
) 
 , document.getElementById('root') as HTMLElement);
