export default function colorHealth(name, health) {
    let status = '';
    if (health > 50) {
      status = 'healthy';
    } else if (health > 14 && health < 51) {
      status = 'wounded';
    } else if (health < 15) {
      status = 'critical';
    }
    return status;
  }
