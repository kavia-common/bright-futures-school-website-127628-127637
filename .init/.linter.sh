#!/bin/bash
cd /home/kavia/workspace/code-generation/bright-futures-school-website-127628-127637/school_website_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

