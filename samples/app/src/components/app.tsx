import { useMemo } from 'react';

import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

import styles from '../styles/app.module.css';

const width = 1920;
const height = 1080;

const App = () => {
    const blurFilter = useMemo(() => new BlurFilter(2), []);
    const bunnyUrl = 'https://react.pixijs.io/v7/img/bunny.png';

    return (
            <Stage
                className={styles.stage}
                width={width}
                height={height}
                options={{ background: 0x1099bb }}
            >
                <Sprite image={bunnyUrl} x={300} y={150} />
                <Sprite image={bunnyUrl} x={500} y={150} />
                <Sprite image={bunnyUrl} x={400} y={200} />

                <Container x={width / 2} y={height / 2}>
                    <Text
                        text="Hello World"
                        anchor={0.5}
                        filters={[blurFilter]}
                        style={
                            new TextStyle({
                                align: 'center',
                                fill: '0xffffff',
                                fontSize: 50,
                                letterSpacing: 20,
                                dropShadow: true,
                                dropShadowColor: '#E72264',
                                dropShadowDistance: 6,
                            })
                        }
                    />
                </Container>
            </Stage>
    );
};

export default App;