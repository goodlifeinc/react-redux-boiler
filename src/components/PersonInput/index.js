import React, {PropTypes, Component} from 'react';

import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class PersonInput extends Component {
    constructor(props) {
        super(props);

        this.onAddPersonClick = this.onAddPersonClick.bind(this);
    }

    onAddPersonClick() {
        const firstNameElement = document.getElementById('firstname');
        const lastNameElement = document.getElementById('lastname');

        this.props.addPerson({
            firstname: firstNameElement.value,
            lastname: lastNameElement.value
        });

        firstNameElement.value = "";
        lastNameElement.value = "";

        firstNameElement.focus();
    }

    // componentDidMount() {
    //     document.getElementById('firstname').focus();
    // }

    render() {
        return (
            <Row>
                <Col md="6">
                    <Input id="firstname" type="text" label="First name" floatingLabel={true} />
                    <Input id="lastname" type="text" label="Last name" floatingLabel={true} />
                    <Button onClick={this.onAddPersonClick}>Add person</Button>
                </Col>
            </Row>
        );
    }
}

PersonInput.propTypes = {
    addPerson: PropTypes.func.isRequired
};

export default PersonInput;
