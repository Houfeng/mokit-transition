#!/bin/bash

set -e

nokit stop && nokit start --name mokit-transition --config server -e local