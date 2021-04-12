import React, { useCallback, VFC } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import { Button, Input, Label } from '@pages/SignUp/styles';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  setShowCreateChannelModal: (flag: boolean) => void;
}

const CreateChannelModal: VFC<Props> = ({ show, onCloseModal, setShowCreateChannelModal }) => {
  const [newChannel, onChangeNewChannel, setNewChannel] = useInput('');
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  const onCreateChannel = useCallback(() => {
    axios
      .post(
        `http://localhost:3095/api/workspaces/${workspace}channels`,
        {
          name: newChannel,
        },
        {
          withCredentials: true,
        },
      )
      .then(() => {
        setShowCreateChannelModal(false);
        setNewChannel('');
      })
      .catch((error) => {
        console.dir(error);
        toast.error(error.respone?.data, { position: 'bottom-center' });
      });
  }, [newChannel]);

  if (!show) return null;

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span>채널</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </Label>
        <Button type="submit">생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
