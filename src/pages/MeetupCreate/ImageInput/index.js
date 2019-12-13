import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import { MdCameraAlt } from 'react-icons/md';

import api from '~/services/api';

import { Container, Select, Image } from './styles';

export default function ImageInput() {
  const { defaultValue, registerField, error, fieldName } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        fieldName,
        ref: ref.current,
        path: 'props.file',
        clearValue: fileRef => {
          fileRef.clear();
        },
      });
    }
  }, [ref.current, fieldName]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <>
      <Container>
        <label htmlFor="imgInput">
          {preview ? (
            <Image image={preview} />
          ) : (
            <Select>
              <MdCameraAlt color="#fff" size={64} />
              <p>Selecionar imagem</p>
            </Select>
          )}

          <input
            type="file"
            id="imgInput"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </Container>

      {error && <span>{error}</span>}
    </>
  );
}
