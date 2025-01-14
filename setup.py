#!/usr/bin/env python3
import subprocess
import sys
import os
from typing import List, Tuple

def check_command_exists(command: str) -> bool:
    try:
        subprocess.run([command, '--version'], capture_output=True)
        return True
    except FileNotFoundError:
        return False

def check_python_dependencies() -> Tuple[bool, List[str]]:
    """Check if all Python dependencies are installed."""
    if not os.path.exists('requirements.txt'):
        print("Warning: requirements.txt not found")
        return False, []
    
    try:
        result = subprocess.run([sys.executable, '-m', 'pip', 'freeze'], 
        capture_output=True, text=True)
        installed = set(result.stdout.split())
        
        with open('requirements.txt', 'r') as f:
            required = set(f.read().split())
        
        missing = [pkg for pkg in required if pkg not in installed]
        return len(missing) == 0, missing
    except Exception as e:
        print(f"Error checking Python dependencies: {e}")
        return False, []

def check_node_dependencies() -> bool:
    """Check if node_modules exists and package.json is present."""
    if not os.path.exists('frontend/package.json'):
        print("Warning: package.json not found in frontend directory")
        return False
    
    return os.path.exists('frontend/node_modules')

def install_python_dependencies() -> bool:
    """Install Python dependencies from requirements.txt."""
    try:
        subprocess.run([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'], 
        check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error installing Python dependencies: {e}")
        return False

def install_node_dependencies() -> bool:
    """Install Node.js dependencies."""
    try:
        os.chdir('frontend')
        subprocess.run(['npm', 'install'], check=True)
        os.chdir('..')
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error installing Node dependencies: {e}")
        return False

def main():
    if not check_command_exists('node'):
        print("Error: Node.js is not installed")
        return
    
    if not check_command_exists('npm'):
        print("Error: npm is not installed")
        return
    

    python_deps_installed, missing_deps = check_python_dependencies()
    if not python_deps_installed:
        print("Missing Python dependencies:", missing_deps)
        print("Installing Python dependencies...")
        if install_python_dependencies():
            print("Python dependencies installed successfully")
        else:
            print("Failed to install Python dependencies")
    
    if not check_node_dependencies():
        print("Node.js dependencies not found")
        print("Installing Node.js dependencies...")
        if install_node_dependencies():
            print("Node.js dependencies installed successfully")
        else:
            print("Failed to install Node.js dependencies")
    
    print("\nSetup complete! You can now run your project.")

if __name__ == "__main__":
    main()