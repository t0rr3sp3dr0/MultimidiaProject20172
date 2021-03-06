import { CardTitle } from 'material-ui';
import * as React from 'react';

const styles: {
    [key: string]: React.CSSProperties;
} = {
    cardTitle: {
        gridArea: 'auto',
        alignSelf: 'center',
        justifySelf: 'center',
    },
    div: {
        display: 'grid',
        height: 'calc(100vh - 64px)',
        width: '100%',
    },
};

class Unauthorized extends React.Component {
    render(): JSX.Element | null | false {
        return (
            <div style={styles.div}>
                <CardTitle style={styles.cardTitle} title="Unauthorized" subtitle="Error 401" />
            </div>
        );
    }
}

export default Unauthorized;
