'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChallengePage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    'challenger@vcpp:~$ Welcome to VC++ Challenge Terminal',
    'Type "help" for available commands.',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sound effects
  const playKeystroke = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAaA0CS2O/GdSECKH3J7tmNMgcadrzs5adTEgpJouLwrlELApPX8AHs1uS6OgU=')
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  const playEnter = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRh4BAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YfoAAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSsWWbPk4qBLEAxJnuHwuV0UB0ap5eKiUBUMQ5zX7GEVA==')
    audio.volume = 0.15
    audio.play().catch(() => {})
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (cmd: string) => {
    playEnter();
    const command = cmd.toLowerCase().trim();
    const newOutput = [...output, `$ ${cmd}`];

    switch (command) {
      case 'help':
        newOutput.push('Available commands:', '  clear    - Clear the terminal', '  ls       - List directory contents', '  pwd      - Print working directory', '  whoami   - Display current user', '  date     - Show current date and time', '  uname    - System information', '  cat      - Display file contents', '  echo     - Echo a message', '  help     - Show this help message', '');
        break;
      case 'clear':
        setOutput(['challenger@vcpp:~$ Welcome to VC++ Challenge Terminal', 'Type "help" for available commands.', '']);
        setInput('');
        return;
      case 'ls':
        newOutput.push('challenge.txt  README.md  secret.log', '');
        break;
      case 'pwd':
        newOutput.push('/home/challenger', '');
        break;
      case 'whoami':
        newOutput.push('challenger', '');
        break;
      case 'date':
        newOutput.push(new Date().toString(), '');
        break;
      case 'uname':
      case 'uname -a':
        newOutput.push('Linux vcpp-terminal 5.15.0 #1 SMP x86_64 GNU/Linux', '');
        break;
      case 'cat challenge.txt':
        newOutput.push('Congratulations! You found the hidden challenge.', 'You have successfully navigated to the VC++ secret terminal.', 'Well done, challenger!', '');
        break;
      case 'cat readme.md':
      case 'cat README.md':
        newOutput.push('# VC++ Challenge Terminal', '', 'Welcome to the hidden terminal challenge!', 'Explore the available commands to learn more.', '');
        break;
      case 'cat secret.log':
        newOutput.push('[ENCRYPTED] 01001000 01101001 01100100 01100100 01100101 01101110', '[ENCRYPTED] 01000011 01101000 01100001 01101100 01101100 01100101 01101110 01100111 01100101', '');
        break;
      case '':
        newOutput.push('');
        break;
      default:
        if (command.startsWith('echo ')) {
          const message = cmd.substring(5);
          newOutput.push(message, '');
        } else if (command.startsWith('cat ')) {
          const filename = cmd.substring(4);
          newOutput.push(`cat: ${filename}: No such file or directory`, '');
        } else {
          newOutput.push(`bash: ${cmd}: command not found`, '');
        }
    }

    setOutput(newOutput);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else {
      playKeystroke();
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400" style={{fontFamily: 'Courier New, monospace'}}>
      <div className="max-w-full mx-auto p-6">
        <div className="mb-4">
          <span className="text-green-500">challenger@vcpp:~$ </span>
          <span className="text-white">Welcome to VC++ Challenge Terminal</span>
        </div>
        
        <div 
          className="bg-black min-h-screen p-0 overflow-y-auto cursor-text"
          onClick={handleTerminalClick}
        >
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          
          <div className="flex items-center">
            <span className="text-green-500">challenger@vcpp</span><span className="text-white">:</span><span className="text-blue-400">~</span><span className="text-white">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-green-400 flex-1 caret-green-400"
              style={{fontFamily: 'Courier New, monospace'}}
              autoComplete="off"
              spellCheck={false}
            />
            <span className="animate-pulse text-green-400">█</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}