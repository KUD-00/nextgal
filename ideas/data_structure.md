# Data Structure
Client-Server data transformation will in JSON format

Creators write scenarios in a easy way

So need a transform program to transform creators file to server file?
    
## Scenario

Section: will render environment
Block: only change text

```
{
    avatar: { MIZUKI: }
}
"This is not fair MIZUKI!" @NATSUKI @bold
"No matter what you say, it's the only way." @MIZUKI
```

```json
{
    "session": {
        "id": "14053",
        "character": {
            "mizuki": {
                "source": "/avatar/mizuki.jpeg"
            },
            "natsuki": {
                
            }
        },
        "text": {
            ""
        }
    }
}
```
