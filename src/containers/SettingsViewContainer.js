import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {navigateToSingleHistoricEventDetail} from '../store/navigation/actions';
import ThemeButton from '../components/common/ThemeButton';
import {updateCurrentUsername, updateUser} from '../store/user/actions';
import {Button, Form} from 'react-bootstrap';

const View = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center;
`;

function SettingsViewContainer(props) {
  const {currentUsername, updateUsername, updateUser} = {...props};

  const [newUsername, setNewUsername] = useState(currentUsername);

  function updateUserStore(event) {
    updateUser(newUsername);
    event.preventDefault();
    event.stopPropagation();
  }

  return (
      <View>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
          </Form.Group>

          <ThemeButton onClick={updateUserStore}>Sign In</ThemeButton>

        </Form>
      </View>
  );
}

const mapStateToProps = (state) => ({
  currentUsername: state.user.currentUsername
});

const mapDispatchToProps = (dispatch) => ({
  updateUsername: () => dispatch(updateCurrentUsername()),
  updateUser: (newUsername) => dispatch(updateUser(newUsername)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingsViewContainer);