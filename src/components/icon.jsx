import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

library.add(fab, faMedium, faSquareCheck, faMugSaucer);

const IconMap = {
  'My Account': 'mug-saucer',
  'Settings': 'square-check',
  'Help': 'mug-saucer'
}

export default function Icon({name}) {
  const icon = IconMap[name] || 'fab';
  return (
    <div className="icon-container">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
