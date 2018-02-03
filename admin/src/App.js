import React from 'react';
import { HydraAdmin } from '@api-platform/admin';
import { RichTextField } from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';



const entrypoint = 'http://songsmanager.westeurope.cloudapp.azure.com';

const myApiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint)
  .then( ({ api }) => {
    const songs = api.resources.find(({ name }) => 'songs' === name);
    const lyrics = songs.fields.find(f => 'lyrics' === f.name);
    lyrics.input = props => (
      <RichTextInput {...props} source="lyrics" />

    );
    lyrics.field = props => (
      <RichTextField {...props} source="lyrics" elStyle={{ 'textOverflow': 'ellipsis' }} stripTags />
    );

    lyrics.input.defaultProps = {
      addField: true,
      addLabel: true
      
    };
    
    return { api };
  })
;

export default (props) => (
    <HydraAdmin apiDocumentationParser={myApiDocumentationParser} entrypoint={entrypoint} />
);
