void main(){
    vec4 modelPos = modelMatrix * vec4(position, 1.0);
    vec4 viewPos = viewMatrix * modelPos;
    vec4 ProjectionPos = projectionMatrix * viewPos;
    gl_Position = ProjectionPos;
}