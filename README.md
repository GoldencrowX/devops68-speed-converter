# Speed Converter API

Convert between speed units (m/s, km/h, mph).

## Endpoint

### GET `/convert`

**Parameters:**
- `speed` (required): Speed value
- `from` (required): Source unit (ms, kmh, mph)
- `to` (required): Target unit

**Example Request:**
```
http://localhost:3024/convert?speed=100&from=kmh&to=mph
```

**Example Response:**
```json
{
  "speed": 100,
  "from": "kmh",
  "to": "mph",
  "result": 62.14
}
```
