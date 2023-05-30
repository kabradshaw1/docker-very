FROM python:3.11-alpine3.17
ENV PYTHONUNBUFFED 1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .