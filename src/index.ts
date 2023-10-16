import {driver} from "driver.js";
import 'driver.js/dist/driver.css';

const button = document.getElementById('button');
button.addEventListener('click', () => {
    const guide = driver({
        steps: [
            {
                element: '#p1',
                popover: {
                    title: 'Hello p1',
                }
            },
            {
                element: '#p2',
                popover: {
                    title: 'Hello p2',
                }
            },
            {
                element: '#p3',
                popover: {
                    title: 'Hello p3',
                }
            }
        ]
    });
    guide.drive();

})

