import { useState, useEffect } from 'react';
import './message.css';

const socket = io('http://localhost:8000');

export default Message;
