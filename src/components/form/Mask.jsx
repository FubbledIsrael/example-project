import React from 'react';
import { IMaskInput } from 'react-imask';

const Phone = React.forwardRef((props, ref) => {
    const { onChange, ...other } = props;

    return (
        <IMaskInput
            {...other}
            mask="#00 000 0000"
            definitions={{ '#': /[0-9]/ }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite />
    );
});

const maskTextfield = {
    Phone
}

export default maskTextfield;