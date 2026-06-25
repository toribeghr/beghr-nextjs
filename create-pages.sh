#!/bin/bash

# Create payroll industry pages
mkdir -p src/app/services/{payroll-healthcare,payroll-finance,payroll-technology,payroll-engineering,payroll-trades,payroll-executive}
mkdir -p src/app/services/{hcm-software,hcm-legal,hcm-healthcare,hcm-finance,hcm-technology,hcm-engineering,hcm-trades,hcm-executive}
mkdir -p src/app/services/{job-placement,placement-legal,placement-healthcare,placement-finance,placement-technology,placement-engineering,placement-trades,placement-executive}

echo "Directories created. Now populate page.tsx files in each."
