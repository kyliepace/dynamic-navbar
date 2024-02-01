import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faUser, faSquareCheck, faMugSaucer } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faMedium, faSquareCheck, faMugSaucer, faUser);

const IconMap = {
  'My Account': 'mug-saucer',
  'Settings': 'square-check',
  'Help': 'mug-saucer'
}

export default function Icon({name}) {
  const icon = IconMap[name] || 'user';
  return (
    <div className="icon-container">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
