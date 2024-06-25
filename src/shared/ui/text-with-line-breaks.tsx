import React from 'react';

export function TextWithLineBreaks({ text }: { text: string }) {
    const textWithBreaks = text.split('\n').map((text, index) => (
        <React.Fragment key={index}>
            {text}
            <br />
        </React.Fragment>
    ));

    return <div>{textWithBreaks}</div>;
}
