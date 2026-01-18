import { logs } from "../data/logs";

const Logs = () => {
  const highCarbonLogs = logs.filter(log => log.carbon >= 4);

  return (
    <div>
        <h2>HIgh Carbon Activities</h2>
        <ul>
            {highCarbonLogs.map(log=>(
                <li key={log.id}
                    style={{color: "red"}}>
                    {log.activity} : {log.carbon} Kgs
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Logs;
