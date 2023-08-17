import React, { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import { deleteFirstResult, GOOGLE_URL_MATCH } from './utils/DOMChange';

import './App.css';

const App = () => {
  const [tabId, setTabId] = useState<number | undefined>(undefined);
  const [tabUrl, setTabUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const init = async () => {
      // eslint-disable-next-line no-undef
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (tab) {
        setTabId(tab.id);
        setTabUrl(tab.url);
      }
    };
    init().then();
  }, []);

  const onDeleButtonClickHandler = async () => {
    if (tabId) {
      // eslint-disable-next-line no-undef
      await chrome.scripting.executeScript({
        target: { tabId },
        func: deleteFirstResult,
      });
    }
  };

  const disabled = !tabUrl?.includes(GOOGLE_URL_MATCH);

  return (
    <section className="main">
      <p className="description">
        {!disabled
          ? 'Click the button to delete the first search result on Google.'
          : `The extension only works on ${GOOGLE_URL_MATCH}=[your request]`}
      </p>
      <Button onClick={onDeleButtonClickHandler} disabled={disabled}>
        Delete first result
      </Button>
    </section>
  );
};

export default App;
