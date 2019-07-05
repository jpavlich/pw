#/bin/bash
echo "#/bin/bash" > install_extensions.sh
for i in $(code --list-extensions); do echo "code --install-extension $i"; done >> install_extensions.sh